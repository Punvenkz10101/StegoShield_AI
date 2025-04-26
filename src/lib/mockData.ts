
export const dashboardStats = {
  filesScanned: "1,295",
  threatsDetected: "47",
  stegoFiles: "29",
  loggedToBlockchain: "76"
};

export const recentActivities = [
  {
    id: "1",
    filename: "quarterly_report.pdf",
    type: "document",
    source: "Email",
    status: "clean" as "clean" | "malware" | "stego",
    timestamp: "2 minutes ago"
  },
  {
    id: "2",
    filename: "product_demo.mp4",
    type: "video",
    source: "WhatsApp",
    status: "stego" as "clean" | "malware" | "stego",
    timestamp: "15 minutes ago"
  },
  {
    id: "3",
    filename: "invoice_details.jpg",
    type: "image",
    source: "Manual",
    status: "malware" as "clean" | "malware" | "stego",
    timestamp: "45 minutes ago"
  },
  {
    id: "4",
    filename: "meeting_notes.docx",
    type: "document",
    source: "Email",
    status: "clean" as "clean" | "malware" | "stego",
    timestamp: "2 hours ago"
  },
  {
    id: "5",
    filename: "presentation.pptx",
    type: "document",
    source: "Manual",
    status: "clean" as "clean" | "malware" | "stego",
    timestamp: "5 hours ago"
  }
];

export const threatDistribution = [
  {
    name: "Clean",
    value: 78,
    color: "#4CAF50"
  },
  {
    name: "Stego",
    value: 12,
    color: "#FFC107"
  },
  {
    name: "Malware",
    value: 10,
    color: "#F44336"
  }
];
