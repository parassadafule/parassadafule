import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [drawnElements, setDrawnElements] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          ["envelope", "form", "contact", "social"].forEach((element, index) => {
            setTimeout(() => {
              setDrawnElements((prev) => [...prev, element]);
            }, index * 400);
          });
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("contact");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: `[Portfolio Contact] ${formData.subject}`,
          message: formData.message,
          to_name: "Paras",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Email send failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/parassadafule21", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", sketch: "projects" },
    { name: "LinkedIn", url: "https://linkedin.com/in/parassadafule", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg", sketch: "profile" },
    { name: "LeetCode", url: "https://leetcode.com/parassadafule21", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/leetcode/leetcode-original.svg", sketch: "coding" },
    { name: "X", url: "https://x.com/ParasSadafule", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg", sketch: "updates" },
  ];

  return (
    <section id="contact" className="pt-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(transparent, transparent 23px, #e5e7eb 23px, #e5e7eb 24px)",
            backgroundSize: "100% 24px",
          }}
        />

        <div className="absolute left-8 top-0 bottom-0 flex flex-col justify-center space-y-6">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-8 h-8 border-2 border-gray-300 rounded-full bg-white" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 relative">
            <h2
              className={`text-2xl sm:text-3xl md:text-4xl font-mono font-bold mb-4 text-gray-700 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Let&apos;s Connect
            </h2>

            <div
              className={`transition-all duration-1000 delay-500 ${
                drawnElements.includes("envelope") ? "opacity-100" : "opacity-0"
              }`}
            >
              <svg width="200" height="100" className="mx-auto mb-6">
                <rect x="20" y="30" width="160" height="50" stroke="#9ca3af" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                <path d="M20,30 L100,55 L180,30" stroke="#9ca3af" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                <circle cx="160" cy="20" r="8" stroke="#dc2626" strokeWidth="2" fill="none" strokeDasharray="3,3" />
                <text x="160" y="25" textAnchor="middle" className="fill-red-500 text-xs font-mono">
                  @
                </text>
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <div
              className={`transition-all duration-1000 delay-100 ${
                drawnElements.includes("form") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="border-2 border-dashed border-gray-500 bg-white p-6 sm:p-8 transform rotate-1">
                <div className="border border-gray-300 p-4 sm:p-6 bg-white transform -rotate-1">
                  <div className="flex items-center space-x-3 mb-6 border-b border-gray-300 pb-4">
                    <div className="w-8 h-8 border-2 border-dashed border-gray-400 rounded flex items-center justify-center text-sm font-mono">
                      <img src="https://cdn-icons-png.flaticon.com/128/561/561127.png" alt="envelope" className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-mono font-bold text-gray-700">Send a Message</h3>
                    <div className="flex-1 h-px bg-gray-300" />
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-mono font-medium mb-2 text-gray-600">Name:</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="border-2 border-dashed border-gray-400 font-mono text-sm focus:border-gray-600 px-3 py-1 w-full bg-transparent"
                          style={{ borderRadius: "0" }}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-mono font-medium mb-2 text-gray-600">Email:</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="border-2 border-dashed border-gray-400 font-mono text-sm focus:border-gray-600 px-3 py-1 w-full bg-transparent"
                          style={{ borderRadius: "0" }}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-mono font-medium mb-2 text-gray-600">Subject:</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="border-2 border-dashed border-gray-400 font-mono text-sm focus:border-gray-600 px-3 py-1 w-full bg-transparent"
                        style={{ borderRadius: "0" }}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-mono font-medium mb-2 text-gray-600">Message:</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="border-2 border-dashed border-gray-400 font-mono text-sm focus:border-gray-600 px-3 py-2 w-full bg-transparent min-h-[60px]"
                        style={{ borderRadius: "0" }}
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full border-2 border-dashed border-gray-600 bg-white text-gray-600 font-mono hover:bg-gray-50 transform hover:scale-105 hover:-rotate-1 transition-all duration-300 px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                      style={{ borderRadius: "0" }}
                    >
                      {isSubmitting ? "Sending..." : "Send Message ->"}
                    </button>
                  </form>

                  {submitStatus === "success" && (
                    <div className="mt-4 p-3 border-2 border-dashed border-green-500 bg-green-50 text-green-700 font-mono text-sm">
                      Message sent successfully. I&apos;ll get back to you soon.
                    </div>
                  )}
                  {submitStatus === "error" && (
                    <div className="mt-4 p-3 border-2 border-dashed border-red-500 bg-red-50 text-red-700 font-mono text-sm">
                      Message sending failed. Please try again or contact me directly.
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div
                className={`transition-all duration-1000 delay-200 ${
                  drawnElements.includes("contact") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="border-2 border-dashed border-gray-500 bg-white p-6 sm:p-8 transform -rotate-1">
                  <div className="border-b border-gray-300 pb-4 mb-6">
                    <h3 className="text-lg sm:text-xl font-mono font-bold text-gray-700 flex items-center">
                      Contact Details
                      <div className="ml-3 w-12 h-px bg-gray-400" />
                    </h3>
                  </div>

                  <div className="space-y-4 font-mono text-sm">
                    <div className="flex items-center border-b border-dotted border-gray-300 pb-3">
                      <div className="w-8 h-8 border border-dashed border-gray-400 rounded flex items-center justify-center mr-4">
                        <img src="https://cdn-icons-png.flaticon.com/128/2549/2549872.png" alt="email" className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-700">Email</div>
                        <a className="text-gray-600" href="mailto:parassadafule21@gmail.com">
                          parassadafule21@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center border-b border-dotted border-gray-300 pb-3">
                      <div className="w-8 h-8 border border-dashed border-gray-400 rounded flex items-center justify-center mr-4">
                        <img src="https://cdn-icons-png.flaticon.com/128/159/159832.png" alt="phone" className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-700">Phone</div>
                        <div className="text-gray-600">+91 9404337618</div>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-8 h-8 border border-dashed border-gray-400 rounded flex items-center justify-center mr-4">
                        <img src="https://cdn-icons-png.flaticon.com/128/2838/2838912.png" alt="location" className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-700">Location</div>
                        <div className="text-gray-600">Solapur, Maharashtra, India</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -top-2 -right-2 w-6 h-6 border-2 border-gray-400 bg-white transform rotate-45" />
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 border-2 border-gray-400 bg-white" />
                </div>
              </div>

              <div
                className={`transition-all duration-1000 delay-400 ${
                  drawnElements.includes("social") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="border-2 border-dashed border-gray-500 bg-white p-6 sm:p-8 transform rotate-1">
                  <div className="border-b border-gray-300 pb-4 mb-6">
                    <h3 className="text-lg sm:text-xl font-mono font-bold text-gray-700 flex items-center">
                      Profiles
                      <div className="ml-3 w-8 h-px bg-gray-400" />
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center space-x-3 p-3 border-2 border-dashed border-gray-400 hover:border-gray-600 transform hover:scale-105 hover:-rotate-1 transition-all duration-300 bg-gray-50 hover:bg-white"
                      >
                        <span className="text-lg filter grayscale group-hover:filter-none transition-all duration-300 flex items-center justify-center">
                          {link.icon.startsWith('http') ? (
                            <img 
                              src={link.icon}
                              alt={link.name}
                              className="w-5 h-5" 
                            />
                          ) : (
                            link.icon
                          )}
                        </span>
                        <span className="text-sm font-mono text-gray-600 w-10">{link.name.slice(0, 3)}</span>
                        <div className="font-mono">
                          <div className="text-sm font-semibold text-gray-700">{link.name}</div>
                          <div className="text-xs text-gray-500">{link.sketch}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer
        className={`mt-16 sm:mt-20 py-6 sm:py-10 border-t-2 border-dashed border-gray-300 transition-all duration-1000 delay-600 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center">
            <div className="border-2 border-dashed border-gray-400 bg-white p-3 sm:p-4 inline-block transform -rotate-1">
              <p className="text-sm font-mono text-gray-600">(c) 2026 Paras Sadafule.</p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;
