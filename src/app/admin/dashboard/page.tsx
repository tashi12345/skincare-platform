"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/AuthContext";
import { db } from "@/lib/firebase";
import { collection, onSnapshot, doc, updateDoc, query, orderBy } from "firebase/firestore";
import { LogOut, Calendar, Clock, Check, X, MessageSquare } from "lucide-react";
import { BRAND_CONFIG } from "@/data/config";

interface Appointment {
    id: string;
    name: string;
    email: string;
    phone: string;
    serviceName: string;
    date: string;
    timeSlot: string;
    status: string;
    notes?: string;
    createdAt: any;
}

interface ContactMessage {
    id: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    read: boolean;
    createdAt: any;
}

export default function AdminDashboard() {
    const { logout } = useAuth();
    const router = useRouter();
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [messages, setMessages] = useState<ContactMessage[]>([]);
    const [tab, setTab] = useState<"dashboard" | "appointments" | "messages">("dashboard");
    const [loading, setLoading] = useState(true);

    // DEMO MODE: Authentication disabled for template demo
    // Re-enable authentication when deploying for actual clients

    useEffect(() => {
        // Timeout fallback - if loading takes more than 3 seconds, show dashboard anyway
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 3000);

        if (!db) {
            // Firebase not initialized, still show dashboard with empty state
            setLoading(false);
            clearTimeout(timeout);
            return;
        }

        // Fetch appointments
        const appointmentsQuery = query(collection(db, "appointments"), orderBy("createdAt", "desc"));
        const unsubscribeAppointments = onSnapshot(
            appointmentsQuery,
            (snapshot) => {
                const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Appointment));
                setAppointments(data);
                setLoading(false);
                clearTimeout(timeout);
            },
            (error) => {
                console.error("Error fetching appointments:", error);
                setLoading(false);
                clearTimeout(timeout);
            }
        );

        // Fetch contact messages
        const messagesQuery = query(collection(db, "contactMessages"), orderBy("createdAt", "desc"));
        const unsubscribeMessages = onSnapshot(
            messagesQuery,
            (snapshot) => {
                const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as ContactMessage));
                setMessages(data);
            },
            (error) => {
                console.error("Error fetching messages:", error);
            }
        );

        return () => {
            unsubscribeAppointments();
            unsubscribeMessages();
            clearTimeout(timeout);
        };
    }, []);

    const updateStatus = async (id: string, status: string) => {
        await updateDoc(doc(db, "appointments", id), { status });
    };

    const markAsRead = async (id: string) => {
        await updateDoc(doc(db, "contactMessages", id), { read: true });
    };

    const deleteMessage = async (id: string) => {
        const docRef = doc(db, "contactMessages", id);
        await updateDoc(docRef, { read: true }); // Just mark as read for now
    };

    const stats = {
        total: appointments.length,
        pending: appointments.filter(a => a.status === "pending").length,
        confirmed: appointments.filter(a => a.status === "confirmed").length,
        today: appointments.filter(a => a.date === new Date().toISOString().split("T")[0]).length
    };

    if (loading) return (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '16px' }}>
            <div style={{ width: '40px', height: '40px', border: '4px solid var(--border)', borderTop: '4px solid var(--primary)', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
            <p style={{ color: 'var(--text-muted)' }}>Loading dashboard...</p>
            <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
        </div>
    );

    return (
        <div style={{ minHeight: '100vh', background: '#050505', display: 'flex' }}>
            <div style={{ width: '250px', background: 'var(--surface)', borderRight: '1px solid var(--border)', padding: '24px' }}>
                <h2 style={{ fontSize: '20px', marginBottom: '32px', color: 'var(--primary)' }}>{BRAND_CONFIG.clinicName}</h2>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {["dashboard", "appointments", "messages"].map(t => (
                        <button
                            key={t}
                            onClick={() => setTab(t as any)}
                            style={{
                                padding: '12px 16px',
                                background: tab === t ? 'var(--primary)' : 'transparent',
                                color: tab === t ? '#000' : 'var(--text-muted)',
                                borderRadius: '10px',
                                textAlign: 'left',
                                fontWeight: 600,
                                textTransform: 'capitalize'
                            }}
                        >
                            {t}
                        </button>
                    ))}
                </nav>
                <button
                    onClick={() => { logout(); router.push("/"); }}
                    style={{ marginTop: 'auto', width: '100%', padding: '12px', background: 'transparent', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '8px', position: 'absolute', bottom: '24px' }}
                >
                    <LogOut size={18} /> Logout
                </button>
            </div>

            <div style={{ flex: 1, padding: '40px' }}>
                {tab === "dashboard" && (
                    <>
                        <h1 style={{ fontSize: '32px', marginBottom: '32px' }}>Dashboard</h1>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginBottom: '48px' }}>
                            {[
                                { label: "Total Appointments", value: stats.total, icon: Calendar },
                                { label: "Pending", value: stats.pending, icon: Clock },
                                { label: "Confirmed", value: stats.confirmed, icon: Check },
                                { label: "Today's Appointments", value: stats.today, icon: Calendar }
                            ].map((stat, i) => (
                                <div key={i} className="premium-card" style={{ padding: '24px' }}>
                                    <stat.icon size={24} style={{ color: 'var(--primary)', marginBottom: '12px' }} />
                                    <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '8px' }}>{stat.label}</p>
                                    <p style={{ fontSize: '32px', fontWeight: 700 }}>{stat.value}</p>
                                </div>
                            ))}
                        </div>
                        <h2 style={{ fontSize: '20px', marginBottom: '20px' }}>Recent Appointments</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {appointments.slice(0, 5).map(apt => (
                                <div key={apt.id} className="premium-card" style={{ padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div>
                                        <p style={{ fontWeight: 600 }}>{apt.name} - {apt.serviceName}</p>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>{apt.date} at {apt.timeSlot}</p>
                                    </div>
                                    <span style={{ padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 700, background: apt.status === 'confirmed' ? '#4ade8022' : '#fbbf2422', color: apt.status === 'confirmed' ? '#4ade80' : '#fbbf24' }}>
                                        {apt.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {tab === "appointments" && (
                    <>
                        <h1 style={{ fontSize: '32px', marginBottom: '32px' }}>All Appointments</h1>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {appointments.map(apt => (
                                <div key={apt.id} className="premium-card" style={{ padding: '24px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                                        <div>
                                            <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>{apt.name}</h3>
                                            <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>{apt.email} • {apt.phone}</p>
                                        </div>
                                        <span style={{ padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 700, height: 'fit-content', background: apt.status === 'confirmed' ? '#4ade8022' : apt.status === 'pending' ? '#fbbf2422' : '#ef444422', color: apt.status === 'confirmed' ? '#4ade80' : apt.status === 'pending' ? '#fbbf24' : '#ef4444' }}>
                                            {apt.status}
                                        </span>
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '16px', paddingTop: '16px', borderTop: '1px solid var(--border)' }}>
                                        <div>
                                            <p style={{ color: 'var(--text-muted)', fontSize: '12px', marginBottom: '4px' }}>Service</p>
                                            <p style={{ fontWeight: 600 }}>{apt.serviceName}</p>
                                        </div>
                                        <div>
                                            <p style={{ color: 'var(--text-muted)', fontSize: '12px', marginBottom: '4px' }}>Date</p>
                                            <p style={{ fontWeight: 600 }}>{new Date(apt.date).toLocaleDateString()}</p>
                                        </div>
                                        <div>
                                            <p style={{ color: 'var(--text-muted)', fontSize: '12px', marginBottom: '4px' }}>Time</p>
                                            <p style={{ fontWeight: 600 }}>{apt.timeSlot}</p>
                                        </div>
                                    </div>
                                    {apt.notes && (
                                        <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '16px', padding: '12px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }}>
                                            <MessageSquare size={14} style={{ display: 'inline', marginRight: '6px' }} />
                                            {apt.notes}
                                        </p>
                                    )}
                                    {apt.status === "pending" && (
                                        <div style={{ display: 'flex', gap: '12px' }}>
                                            <button onClick={() => updateStatus(apt.id, "confirmed")} className="btn-primary" style={{ padding: '8px 16px' }}>
                                                <Check size={16} /> Confirm
                                            </button>
                                            <button onClick={() => updateStatus(apt.id, "cancelled")} style={{ padding: '8px 16px', background: 'transparent', border: '1px solid var(--border)', color: '#fff', borderRadius: '8px' }}>
                                                <X size={16} /> Cancel
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {tab === "messages" && (
                    <>
                        <h1 style={{ fontSize: '32px', marginBottom: '32px' }}>Contact Messages</h1>
                        {messages.length === 0 ? (
                            <div className="premium-card" style={{ padding: '60px 40px', textAlign: 'center' }}>
                                <MessageSquare size={48} style={{ color: 'var(--primary)', margin: '0 auto 24px' }} />
                                <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>No Messages Yet</h3>
                                <p style={{ color: 'var(--text-muted)' }}>Contact form submissions will appear here</p>
                            </div>
                        ) : (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {messages.map(msg => (
                                    <div key={msg.id} className="premium-card" style={{ padding: '24px', opacity: msg.read ? 0.6 : 1 }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                                            <div>
                                                <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>{msg.name}</h3>
                                                <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>{msg.email} • {msg.phone}</p>
                                            </div>
                                            {!msg.read && (
                                                <span style={{ padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 700, height: 'fit-content', background: '#3b82f622', color: '#3b82f6' }}>
                                                    NEW
                                                </span>
                                            )}
                                        </div>
                                        <div style={{ padding: '16px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', marginBottom: '16px', borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
                                            <p style={{ color: 'var(--text-muted)', fontSize: '12px', marginBottom: '8px' }}>Message</p>
                                            <p style={{ color: '#fff', fontSize: '15px', lineHeight: '1.6' }}>{msg.message}</p>
                                        </div>
                                        <div style={{ display: 'flex', gap: '12px', fontSize: '12px', color: 'var(--text-muted)' }}>
                                            <span>{msg.createdAt ? new Date(msg.createdAt.seconds * 1000).toLocaleString() : 'Just now'}</span>
                                        </div>
                                        {!msg.read && (
                                            <div style={{ marginTop: '16px' }}>
                                                <button onClick={() => markAsRead(msg.id)} className="btn-primary" style={{ padding: '8px 16px' }}>
                                                    <Check size={16} /> Mark as Read
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
