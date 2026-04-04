import { NextRequest, NextResponse } from 'next/server';

// Type for form data
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message?: string;
}

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Phone validation regex (supports various formats)
const PHONE_REGEX = /^[\d\s()+-]{10,}$/;

// Valid service types
const VALID_SERVICES = ['repair', 'replacement', 'storm', 'inspection', 'insurance', 'other'];

/**
 * POST /api/contact
 * Handles contact form submissions
 */
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body: ContactFormData = await request.json();

    // Validate required fields
    const errors: Record<string, string> = {};

    if (!body.name || body.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }

    if (!body.email || !EMAIL_REGEX.test(body.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!body.phone || !PHONE_REGEX.test(body.phone)) {
      errors.phone = 'Please enter a valid phone number';
    }

    if (!body.service || !VALID_SERVICES.includes(body.service)) {
      errors.service = 'Please select a valid service';
    }

    // If there are validation errors, return them
    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          errors,
          message: 'Please fix the errors in the form'
        },
        { status: 400 }
      );
    }

    // Log the submission (in production, you'd send email or save to database)
    console.log('='.repeat(60));
    console.log('NEW CONTACT FORM SUBMISSION');
    console.log('='.repeat(60));
    console.log('Timestamp:', new Date().toISOString());
    console.log('Name:', body.name);
    console.log('Email:', body.email);
    console.log('Phone:', body.phone);
    console.log('Service:', body.service);
    console.log('Message:', body.message || '(none)');
    console.log('='.repeat(60));

    // TODO: In production, add one of these:
    // - Send email via SendGrid, Resend, or Nodemailer
    // - Save to database (Supabase, MongoDB, PostgreSQL)
    // - Send to CRM (HubSpot, Salesforce, etc.)
    // - Send to Slack/Discord for notifications

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Thank you for your inquiry! We will contact you within 1 hour during business hours.',
      data: {
        submittedAt: new Date().toISOString(),
        name: body.name,
        service: body.service
      }
    });

  } catch (error) {
    // Log error for debugging
    console.error('Contact form error:', error);

    // Return generic error response
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred while processing your request. Please try again or call us directly.',
        error: process.env.NODE_ENV === 'development' ? String(error) : undefined
      },
      { status: 500 }
    );
  }
}

// Optionally handle GET requests (for health checks)
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    message: 'Contact API endpoint is running'
  });
}
