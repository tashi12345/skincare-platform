"use client";

import { useState } from "react";
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { Lock, Mail, Smile } from "lucide-react";
import { BRAND_CONFIG } from "@/data/config";
import styles from "./Login.module.css";

export default function AdminLogin() {
    const router = useRouter();

    // DEMO MODE: Skip login and go directly to dashboard
    // For production clients, re-enable the authentication form below
    const handleDemoAccess = () => {
        router.push("/admin/dashboard");
    };

    return (
        <div className={styles.container}>
            <div className={styles.loginCard}>
                <div className={styles.header}>
                    <Smile size={40} className={styles.logo} />
                    <h1>Admin Portal</h1>
                    <p>{BRAND_CONFIG.clinicName} Management</p>
                </div>

                <div className={styles.form}>
                    <div style={{
                        background: 'rgba(212, 175, 55, 0.1)',
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        padding: '16px',
                        borderRadius: '12px',
                        marginBottom: '24px',
                        textAlign: 'center'
                    }}>
                        <p style={{ color: 'var(--primary)', fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>
                            🎯 DEMO MODE
                        </p>
                        <p style={{ color: 'var(--text-muted)', fontSize: '13px' }}>
                            Authentication is disabled for template demo. Access the full admin dashboard to explore all features.
                        </p>
                    </div>

                    <button onClick={handleDemoAccess} className={styles.loginBtn}>
                        Access Admin Dashboard (Demo)
                    </button>

                    <p style={{ color: 'var(--text-muted)', fontSize: '12px', textAlign: 'center', marginTop: '16px' }}>
                        Authentication will be enabled when deployed for actual clients
                    </p>
                </div>

                {/* PRODUCTION VERSION - Uncomment for actual clients:
                <form onSubmit={handleLogin} className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label><Mail size={16} /> Email Address</label>
                        <input
                            type="email"
                            placeholder="admin@clinic.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label><Lock size={16} /> Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {error && <p className={styles.error}>{error}</p>}

                    <button type="submit" className={styles.loginBtn} disabled={loading}>
                        {loading ? "Authenticating..." : "Login to Dashboard"}
                    </button>
                </form>
                */}
            </div>
        </div>
    );
}
