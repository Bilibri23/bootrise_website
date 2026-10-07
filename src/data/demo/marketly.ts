export type Severity = "critical" | "high" | "medium" | "ok" | "review";

export type AreaStatus = "critical" | "warning" | "good";

export type DemoView =
  | "overview"
  | "repositories"
  | "system-design"
  | "security"
  | "compliance";

export const marketly = {
  name: "Marketly",
  tagline: "AI-built marketplace for local businesses",
  releaseReadiness: 68,
  summary:
    "Your project works, but I'd review 5 areas before releasing it.",
  repositories: [
    {
      id: "marketly-web",
      name: "marketly-web",
      language: "TypeScript",
      description: "Customer-facing marketplace UI",
    },
    {
      id: "marketly-api",
      name: "marketly-api",
      language: "TypeScript",
      description: "Orders, auth, and payments API",
    },
    {
      id: "marketly-mobile",
      name: "marketly-mobile",
      language: "React Native",
      description: "Merchant mobile companion app",
    },
  ],
  areas: [
    {
      id: "system-design",
      title: "System Design",
      status: "warning" as AreaStatus,
      label: "3 issues",
      view: "system-design" as DemoView,
    },
    {
      id: "security",
      title: "Security",
      status: "critical" as AreaStatus,
      label: "2 critical findings",
      view: "security" as DemoView,
    },
    {
      id: "compliance",
      title: "Compliance",
      status: "warning" as AreaStatus,
      label: "4 areas to review",
      view: "compliance" as DemoView,
    },
    {
      id: "code",
      title: "Code & Dependencies",
      status: "good" as AreaStatus,
      label: "Looks good",
      view: "repositories" as DemoView,
    },
    {
      id: "data",
      title: "Data & Privacy",
      status: "warning" as AreaStatus,
      label: "2 concerns",
      view: "compliance" as DemoView,
    },
  ],
  files: [
    {
      path: "app/orders/[id]/page.tsx",
      language: "tsx",
      content: `export default async function OrderPage({ params }) {
  const order = await fetch(\`/api/orders/\${params.id}\`)
    .then((r) => r.json());

  return (
    <OrderDetails order={order} />
  );
}`,
    },
    {
      path: "lib/api/orders.ts",
      language: "ts",
      content: `export async function getOrder(orderId: string) {
  return fetch(\`\${API_URL}/orders/\${orderId}\`, {
    headers: { Authorization: \`Bearer \${token}\` },
  }).then((r) => r.json());
}`,
    },
    {
      path: "components/OrderDetails.tsx",
      language: "tsx",
      content: `export function OrderDetails({ order }) {
  return (
    <section>
      <h1>Order #{order.id}</h1>
      <p>{order.customer.email}</p>
      <LineItems items={order.items} />
    </section>
  );
}`,
    },
  ],
  chat: {
    question: "Where is the order information coming from?",
    answer: [
      "The order data is requested by marketly-web, but the actual order retrieval logic lives in marketly-api.",
      "I traced the flow across both repositories.",
    ],
    flow: ["Frontend", "API", "Order Service", "Database"],
  },
  architecture: {
    nodes: [
      { id: "web", label: "Marketly Web", x: 50, y: 8 },
      { id: "api", label: "API Layer", x: 50, y: 32 },
      { id: "auth", label: "Auth", x: 18, y: 56 },
      { id: "orders", label: "Orders", x: 50, y: 56 },
      { id: "payments", label: "Payments", x: 82, y: 56 },
      { id: "db", label: "PostgreSQL", x: 50, y: 82 },
    ],
    edges: [
      ["web", "api"],
      ["api", "auth"],
      ["api", "orders"],
      ["api", "payments"],
      ["auth", "db"],
      ["orders", "db"],
      ["payments", "db"],
    ] as [string, string][],
    finding: {
      title: "Orders and authorization",
      summary:
        "The order service appears to accept an order ID from the client, but I couldn't consistently identify an ownership check before returning order data.",
      explanation:
        "When a customer opens an order page, the frontend sends an order ID to the API. BootRise can see the ID being used to look up the order, but it cannot find a reliable step that confirms that order belongs to the signed-in user. That means one customer might be able to request another customer's order by changing the ID — a serious release risk that is easy to miss when an AI scaffolds CRUD endpoints quickly.",
    },
  },
  security: {
    score: 72,
    counts: { critical: 2, high: 4, medium: 8 },
    findings: [
      {
        id: "order-exposure",
        severity: "critical" as Severity,
        title: "Customer order exposure",
        summary:
          "A customer may be able to modify an order ID in the request and access another customer's order.",
        meaning:
          "Imagine you're customer A. You change one number in the URL and suddenly see customer B's order.",
        aiPrompt:
          "Review the order retrieval endpoints. Verify that the authenticated user owns the requested order before returning any order data.",
      },
      {
        id: "session-scope",
        severity: "critical" as Severity,
        title: "Broad session token scope",
        summary:
          "Session tokens appear to grant access to merchant and customer actions without clear separation.",
        meaning:
          "A single login token seems to unlock more of the system than a typical customer should need.",
        aiPrompt:
          "Split customer and merchant authorization scopes. Ensure customer sessions cannot call merchant-only endpoints.",
      },
      {
        id: "rate-limit",
        severity: "high" as Severity,
        title: "Missing rate limits on auth",
        summary:
          "Login and password-reset endpoints do not show clear rate limiting.",
        meaning:
          "Someone could try many passwords quickly without the system slowing them down.",
        aiPrompt:
          "Add rate limiting and lockout protections on authentication and password-reset endpoints.",
      },
    ],
  },
  compliance: {
    framework: "GDPR",
    readiness: 64,
    disclaimer:
      "Potential GDPR gap identified. BootRise helps you spot and address possible requirements — it does not provide legal certification.",
    items: [
      {
        id: "personal-data",
        title: "Personal data",
        status: "ok" as AreaStatus,
        label: "Identified",
      },
      {
        id: "deletion",
        title: "Data deletion",
        status: "critical" as AreaStatus,
        label: "Needs attention",
      },
      {
        id: "retention",
        title: "Data retention",
        status: "warning" as AreaStatus,
        label: "Needs review",
      },
      {
        id: "processors",
        title: "Third-party processors",
        status: "warning" as AreaStatus,
        label: "Needs review",
      },
      {
        id: "privacy-notice",
        title: "Privacy notice",
        status: "ok" as AreaStatus,
        label: "Detected",
      },
    ],
    focus: {
      id: "deletion",
      title: "Account deletion",
      summary:
        "We couldn't identify a complete process that allows users to request deletion of their personal information.",
      action:
        "Add an account deletion workflow and verify that personal data is removed or appropriately handled across connected services.",
    },
  },
} as const;

export type Marketly = typeof marketly;
