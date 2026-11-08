export const basePath = process.env.VERCEL === "1" ? "" : "/JulianoBolosedoces";
export const siteUrl = "https://leonardovieiraalmeida95-design.github.io/JulianoBolosedoces";
export const localPath = (path: string) => `${basePath}${path}`;
export const phone = "5543996752935";
export const whatsappLink = (message = "Olá, Juliano! Gostaria de conversar sobre uma encomenda.") => `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
