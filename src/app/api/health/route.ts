import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Verify brand config is loadable
    const { brand } = await import("@/config/brand");
    if (!brand.name) throw new Error("Brand config missing name");

    // Verify services config is loadable
    const { services } = await import("@/config/services");
    if (!services.length) throw new Error("Services config is empty");

    // Verify locations config is loadable
    const { locations } = await import("@/config/locations");
    if (!locations.length) throw new Error("Locations config is empty");

    return NextResponse.json(
      {
        status: "ok",
        timestamp: new Date().toISOString(),
        version: "1.0.0",
        checks: {
          brand: brand.name,
          services: services.length,
          locations: locations.length,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        timestamp: new Date().toISOString(),
        version: "1.0.0",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
