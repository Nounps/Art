import axios from "axios";

export const generateQRPayment = async (
  amount: number,
  description: string
): Promise<string> => {
  const publicKey = "YOUR_PUBLIC_KEY"; // ใส่ Public Key
  const secretKey = "YOUR_SECRET_KEY"; // ใส่ Secret Key
  const authHeader = `Basic ${btoa(`${publicKey}:${secretKey}`)}`;

  try {
    const response = await axios.post(
      "https://payment-gateway.lailaolab.com/v1/api/payment/generate-bcel-qr",
      {
        amount, // จำนวนเงินที่ต้องการชำระ
        description, // คำอธิบายเกี่ยวกับการชำระเงิน
      },
      {
        headers: {
          Authorization: authHeader,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.data.message === "SUCCESSFULLY") {
      return response.data.qrCode; // URL ของ QR Code
    } else {
      throw new Error("Failed to generate QR Code");
    }
  } catch (error) {
    console.error("Error generating QR Code:", error);
    throw error;
  }
};
