import { Suspense } from "react";
import LoginPage from "./LoginClient";

export const dynamic = "force-dynamic";

export default function page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <LoginPage />
        </Suspense>
    );
}