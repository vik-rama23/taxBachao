"use client";

import { useState } from "react";
import { UploadCloud, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

export default function UploadAssistCard() {

    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const API_URL = "http://127.0.0.1:8000"

    async function handleUpload(files: FileList | null) {

        if (!files) return;

        const formData = new FormData();

        for (let i = 0; i < files.length; i++) {
            formData.append("files", files[i]);
        }

        setLoading(true);

        try {

            const res = await fetch(
                `${API_URL}/extract-tax-data`,
                {
                    method: "POST",
                    body: formData
                }
            );

            const result = await res.json();
            console.log("Extracted data:", result);
            router.push(
                `/document-analysis?data=${encodeURIComponent(
                    JSON.stringify(result.data)
                )}&insights=${encodeURIComponent(
                    JSON.stringify(result.insights)
                )}`);

        } catch (error) {

            console.error("Upload failed:", error);

        }

        setLoading(false);
    }

    return (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-6 mb-6">

            <div className="flex items-start gap-4">

                {/* AI Icon */}
                <div className="bg-white p-3 rounded-xl shadow-sm">
                    <Sparkles className="text-blue-600 w-6 h-6" />
                </div>

                <div className="flex-1">

                    <h3 className="text-lg font-semibold text-gray-800">
                        AI Assist
                    </h3>

                    <p className="text-sm text-gray-600 mt-1">
                        Upload your Form-16 or broker report and we’ll analyze your tax data automatically.
                    </p>

                    {/* Upload Button */}
                    <div className="mt-4">

                        <label className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl cursor-pointer hover:bg-blue-700 transition">

                            <UploadCloud className="w-4 h-4" />

                            {loading ? "Analyzing..." : "Upload Documents"}

                            <input
                                type="file"
                                multiple
                                accept=".pdf,.xlsx,.xls"
                                className="hidden"
                                onChange={(e) => handleUpload(e.target.files)}
                            />

                        </label>

                    </div>

                    {/* Supported Docs */}
                    <div className="mt-3 text-xs text-gray-500 flex gap-2 flex-wrap">

                        <span className="bg-white border px-2 py-1 rounded-md">
                            Form-16
                        </span>

                        <span className="bg-white border px-2 py-1 rounded-md">
                            AIS / 26AS
                        </span>

                        <span className="bg-white border px-2 py-1 rounded-md">
                            Zerodha P&L
                        </span>

                        <span className="bg-white border px-2 py-1 rounded-md">
                            Groww Report
                        </span>

                    </div>

                </div>
            </div>
        </div>
    );
}
