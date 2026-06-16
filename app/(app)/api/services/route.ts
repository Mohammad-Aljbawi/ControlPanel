// import { NextResponse } from "next/server"
// import { services } from "@/lib/data/services"

// export async function GET() {
//   const checkedServices = await Promise.all(
//     services.map(async (service) => {

//       if (
//         service.url.startsWith("smb://") ||
//         service.url === "#"
//       ) {
//         return {
//           ...service,
//           lastCheck: new Date().toLocaleTimeString(),
//         }
//       }

//       try {
//         const start = Date.now()

//         const response = await fetch(service.url, {
//           method: "HEAD",
//           signal: AbortSignal.timeout(5000),
//         })

//         const responseTime = Date.now() - start

//         return {
//           ...service,
//           status: response.ok ? "online" : "offline",
//           responseTime: `${responseTime} ms`,
//           lastCheck: new Date().toLocaleTimeString(),
//         }
//       } catch {
//         return {
//           ...service,
//           status: "offline",
//           responseTime: "-",
//           lastCheck: new Date().toLocaleTimeString(),
//         }
//       }
//     })
//   )

//   return NextResponse.json(checkedServices)
// }

import { exec } from "child_process";
import { promisify } from "util";
import { NextResponse } from "next/server";

const execAsync = promisify(exec);

export async function GET() {
  try {
    const { stdout } = await execAsync(
      'docker ps --format "{{json .}}"'
    );

    const services = stdout
      .trim()
      .split("\n")
      .filter(Boolean)
      .map((line) => JSON.parse(line));

    return NextResponse.json(services);
  } catch (error) {
  console.error(error);

  return NextResponse.json(
    { error: String(error) },
    { status: 500 }
  );
}
}