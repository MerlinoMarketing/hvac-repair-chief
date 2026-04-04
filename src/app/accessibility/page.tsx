import Link from 'next/link';
import { Navigation } from '@/components/landing/Navigation';
import { Footer } from '@/components/landing/Footer';
import { PageHero } from '@/components/landing/PageHero';
import { Eye, Keyboard, MousePointer, Volume2 } from 'lucide-react';

export const metadata = {
  title: 'Accessibility Statement | Pompano Beach House AC Repair',
  description: 'Pompano Beach House AC Repair is committed to ensuring digital accessibility for people with disabilities. Learn about our accessibility features and commitment.',
};

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <Navigation />
      <PageHero
        title="Accessibility Statement"
        subtitle="We are committed to ensuring digital accessibility for people with disabilities"
      />

      <main className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-slate-500 mb-8">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </div>

          <div className="prose prose-lg prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-cyan-600 mb-4">Our Commitment</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Pompano Beach House AC Repair is committed to ensuring digital accessibility for people with disabilities.
                We are continually improving the user experience for everyone and applying the relevant
                accessibility standards to ensure we provide equal access to all of our users.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-cyan-600 mb-4">Conformance Status</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We are working toward conformance with the Web Content Accessibility Guidelines (WCAG) 2.1
                level AA standards. These guidelines explain how to make web content more accessible for
                people with disabilities and user-friendly for everyone.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Our website has been designed with accessibility in mind, including:
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-cyan-600 mb-4">Accessibility Features</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-slate-100/80 border border-slate-700 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-cyan-600/10 p-3 rounded-lg">
                      <Eye className="h-6 w-6 text-cyan-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Visual Accessibility</h3>
                  </div>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600 mt-1">•</span>
                      <span>High contrast color schemes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600 mt-1">•</span>
                      <span>Readable font sizes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600 mt-1">•</span>
                      <span>Text alternatives for images</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600 mt-1">•</span>
                      <span>Resizable text without loss of functionality</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-100/80 border border-slate-700 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-cyan-600/10 p-3 rounded-lg">
                      <Keyboard className="h-6 w-6 text-cyan-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Keyboard Navigation</h3>
                  </div>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600 mt-1">•</span>
                      <span>Full keyboard navigation support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600 mt-1">•</span>
                      <span>Visible focus indicators</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600 mt-1">•</span>
                      <span>Logical tab order</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600 mt-1">•</span>
                      <span>Skip navigation links</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-100/80 border border-slate-700 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-cyan-600/10 p-3 rounded-lg">
                      <Volume2 className="h-6 w-6 text-cyan-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Screen Reader Support</h3>
                  </div>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600 mt-1">•</span>
                      <span>Semantic HTML structure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600 mt-1">•</span>
                      <span>ARIA labels and landmarks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600 mt-1">•</span>
                      <span>Descriptive link text</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600 mt-1">•</span>
                      <span>Proper heading hierarchy</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-100/80 border border-slate-700 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-cyan-600/10 p-3 rounded-lg">
                      <MousePointer className="h-6 w-6 text-cyan-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Responsive Design</h3>
                  </div>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600 mt-1">•</span>
                      <span>Mobile-friendly interface</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600 mt-1">•</span>
                      <span>Touch-friendly interactive elements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600 mt-1">•</span>
                      <span>Zoom and magnification support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600 mt-1">•</span>
                      <span>Consistent navigation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-cyan-600 mb-4">Measures to Support Accessibility</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Pompano Beach House AC Repair takes the following measures to ensure accessibility of our website:
              </p>
              <ul className="space-y-2 text-slate-600 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">•</span>
                  <span>Include accessibility as part of our mission statement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">•</span>
                  <span>Integrate accessibility into our procurement practices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">•</span>
                  <span>Provide continual accessibility training for our staff</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">•</span>
                  <span>Assign clear accessibility goals and responsibilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">•</span>
                  <span>Employ formal accessibility quality assurance methods</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-cyan-600 mb-4">Technical Specifications</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Accessibility of our website relies on the following technologies to work with the
                particular combination of web browser and any assistive technologies or plugins installed
                on your computer:
              </p>
              <ul className="space-y-2 text-slate-600 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">•</span>
                  <span>HTML5</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">•</span>
                  <span>CSS3</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">•</span>
                  <span>JavaScript (React/Next.js)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">•</span>
                  <span>ARIA (Accessible Rich Internet Applications)</span>
                </li>
              </ul>
              <p className="text-slate-600 leading-relaxed mb-4">
                These technologies are relied upon for conformance with the accessibility standards used.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-cyan-600 mb-4">Known Limitations</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Despite our best efforts to ensure accessibility of our website, there may be some
                limitations. We are actively working to address these:
              </p>
              <ul className="space-y-2 text-slate-600 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">•</span>
                  <span>Some third-party content may not be fully accessible</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">•</span>
                  <span>Older uploaded documents may not meet current accessibility standards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">•</span>
                  <span>Some embedded media may lack captions or transcripts</span>
                </li>
              </ul>
              <p className="text-slate-600 leading-relaxed mb-4">
                We are committed to addressing these limitations and continually improving our website's
                accessibility.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-cyan-600 mb-4">Assessment Approach</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Pompano Beach House AC Repair assessed the accessibility of our website by the following approaches:
              </p>
              <ul className="space-y-2 text-slate-600 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">•</span>
                  <span>Self-evaluation using accessibility testing tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">•</span>
                  <span>Manual testing with assistive technologies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">•</span>
                  <span>Keyboard-only navigation testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">•</span>
                  <span>Color contrast verification</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-cyan-600 mb-4">Feedback</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We welcome your feedback on the accessibility of our website. Please let us know if you
                encounter accessibility barriers:
              </p>
              <div className="bg-slate-100/80 border border-slate-700 rounded-lg p-6 mb-6">
                <ul className="space-y-3 text-slate-600">
                  <li><strong className="text-slate-900">Email:</strong> accessibility@pompanobeachhouseacrepair.com</li>
                  <li><strong className="text-slate-900">Phone:</strong> (954) 289-6718</li>
                  <li><strong className="text-slate-900">Mail:</strong> 123 Main Street, Pompano Beach, FL 62701</li>
                </ul>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                We try to respond to accessibility feedback within 5 business days.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-cyan-600 mb-4">Compatibility with Browsers and Assistive Technology</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Our website is designed to be compatible with the following assistive technologies:
              </p>
              <ul className="space-y-2 text-slate-600 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">•</span>
                  <span>Screen readers (JAWS, NVDA, VoiceOver)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">•</span>
                  <span>Screen magnification software</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">•</span>
                  <span>Speech recognition software</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">•</span>
                  <span>Modern web browsers (Chrome, Firefox, Safari, Edge)</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-cyan-600 mb-4">Formal Complaints</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                If you are not satisfied with our response to your accessibility concern, you may file a
                formal complaint. We will acknowledge receipt of your complaint within 5 business days and
                provide a detailed response within 30 days.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-700">
            <Link
              href="/"
              className="text-cyan-600 hover:text-cyan-500 transition inline-flex items-center gap-2"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
