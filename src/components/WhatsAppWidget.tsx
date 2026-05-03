import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaPaperPlane } from "react-icons/fa";

interface WhatsAppWidgetProps {
  isDark: boolean;
}

const PHONE_NUMBER = "96879763931";

const PRE_TEXT =
  "Hello 👋 I’d like more details about your services at Power Solution Oman.";

export const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({
  isDark,
}) => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // ✅ Open WhatsApp (Cross-device safe)
  const openWhatsApp = () => {
    const message = encodeURIComponent(PRE_TEXT);

    const isMobileDevice = /Android|iPhone|iPad|iPod/i.test(
      navigator.userAgent
    );

    const url = isMobileDevice
      ? `https://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${message}`
      : `https://web.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${message}`;

    window.open(url, "_blank");
  };

  // ✅ Current time
  const getCurrentTime = (): string => {
    return new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const currentTime = getCurrentTime();

  return (
    <>
      {/* ✅ Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebe5d] active:scale-95 text-white p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center"
      >
        <FaWhatsapp size={22} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* ✅ Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* ✅ Chat Container */}
            <motion.div
              initial={
                isMobile
                  ? { y: "100%" }
                  : { opacity: 0, y: 40, scale: 0.96 }
              }
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={
                isMobile
                  ? { y: "100%" }
                  : { opacity: 0, y: 40, scale: 0.96 }
              }
              transition={{ duration: 0.35, ease: "easeOut" }}
              className={`fixed z-50 ${
                isMobile
                  ? "bottom-0 left-0 w-full h-[85vh]"
                  : "bottom-10 right-10 w-[380px]"
              }`}
            >
              <div
                className={`h-full rounded-t-3xl md:rounded-2xl shadow-2xl flex flex-col overflow-hidden ${
                  isDark
                    ? "bg-[#0f172a] text-white"
                    : "bg-white text-slate-900"
                }`}
              >
                {/* ✅ Drag Handle (Mobile Only) */}
                {isMobile && (
                  <div className="flex justify-center py-3">
                    <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
                  </div>
                )}

                {/* ✅ Header */}
                <div
                  className={`px-6 py-4 border-b flex items-center justify-between ${
                    isDark ? "border-gray-700" : "border-gray-200"
                  }`}
                >
                  <div>
                    <h3 className="font-semibold text-lg">
                      PCS OMAN
                    </h3>
                    <p className="text-xs text-green-500">
                      Online • Typically replies instantly
                    </p>
                  </div>
                </div>

                {/* ✅ Chat Body */}
                <div
                  className={`flex-1 px-6 py-6 space-y-4 overflow-y-auto ${
                    isDark ? "bg-[#0b141a]" : "bg-gray-50"
                  }`}
                >
                  <div
                    className={`max-w-[75%] p-4 rounded-2xl shadow-sm text-sm leading-relaxed ${
                      isDark
                        ? "bg-[#1e293b] text-white"
                        : "bg-white text-slate-800"
                    }`}
                  >
                    Hello 👋
                    <div className="text-[10px] text-gray-400 mt-2">
                      {currentTime}
                    </div>
                  </div>

                  <div
                    className={`max-w-[75%] p-4 rounded-2xl shadow-sm text-sm leading-relaxed ${
                      isDark
                        ? "bg-[#1e293b] text-white"
                        : "bg-white text-slate-800"
                    }`}
                  >
                    How can we assist you today?
                    <div className="text-[10px] text-gray-400 mt-2">
                      {currentTime}
                    </div>
                  </div>
                </div>

                {/* ✅ Input Section */}
                <div
                  className={`p-4 border-t ${
                    isDark
                      ? "border-gray-700 bg-[#0f172a]"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      value={PRE_TEXT}
                      readOnly
                      className={`flex-1 px-4 py-3 text-sm rounded-xl border outline-none ${
                        isDark
                          ? "border-gray-600 bg-[#1e293b] text-white"
                          : "border-gray-200 bg-gray-100 text-slate-900"
                      }`}
                    />

                    <button
                      onClick={openWhatsApp}
                      className="bg-[#25D366] hover:bg-[#1ebe5d] text-white p-3 rounded-xl transition shadow-md active:scale-95"
                    >
                      <FaPaperPlane size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};