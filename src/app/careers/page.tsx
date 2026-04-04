import Link from 'next/link';
import { Navigation } from '@/components/landing/Navigation';
import { Footer } from '@/components/landing/Footer';
import { PageHero } from '@/components/landing/PageHero';
import { Briefcase, Users, TrendingUp, Heart, DollarSign, Calendar } from 'lucide-react';

export const metadata = {
  title: 'Careers at Pompano Beach House AC Repair | Join Our Team',
  description: 'Join the Pompano Beach House AC Repair team. We\'re looking for skilled professionals who take pride in quality workmanship and customer service.',
};

const benefits = [
  {
    icon: DollarSign,
    title: 'Competitive Pay',
    description: 'Industry-leading wages with performance bonuses and overtime opportunities',
  },
  {
    icon: Heart,
    title: 'Health Benefits',
    description: 'Comprehensive health, dental, and vision insurance for you and your family',
  },
  {
    icon: Calendar,
    title: 'Paid Time Off',
    description: 'Generous PTO, paid holidays, and flexible scheduling options',
  },
  {
    icon: TrendingUp,
    title: 'Career Growth',
    description: 'Training programs, certifications, and advancement opportunities',
  },
  {
    icon: Users,
    title: 'Great Team',
    description: 'Work with skilled professionals in a supportive, respectful environment',
  },
  {
    icon: Briefcase,
    title: 'Stability',
    description: '25+ years in business with consistent year-round work opportunities',
  },
];

const positions = [
  {
    title: 'HVAC Installer',
    type: 'Full-Time',
    experience: '2+ years preferred',
    description: 'Experienced HVAC technician to join our installation team. Must have knowledge of various HVAC systems and materials.',
    requirements: [
      'Minimum 2 years HVAC experience',
      'Valid driver\'s license',
      'Ability to work at heights',
      'Physical fitness and stamina',
      'Team-oriented attitude',
    ],
  },
  {
    title: 'HVAC Foreman',
    type: 'Full-Time',
    experience: '5+ years required',
    description: 'Lead our HVAC installation crews with strong leadership and technical expertise. Oversee job sites and ensure quality standards.',
    requirements: [
      'Minimum 5 years HVAC experience',
      'Proven leadership skills',
      'Knowledge of all HVAC systems',
      'Valid driver\'s license',
      'OSHA certification preferred',
    ],
  },
  {
    title: 'Sales Representative',
    type: 'Full-Time',
    experience: '1+ years preferred',
    description: 'Meet with homeowners and commercial clients to assess HVAC needs and provide estimates. Commission-based opportunity.',
    requirements: [
      'Sales or customer service experience',
      'Excellent communication skills',
      'Valid driver\'s license',
      'HVAC knowledge a plus',
      'Self-motivated and goal-oriented',
    ],
  },
  {
    title: 'Project Manager',
    type: 'Full-Time',
    experience: '3+ years required',
    description: 'Coordinate HVAC projects from estimate to completion. Manage schedules, materials, and customer communications.',
    requirements: [
      'Construction or HVAC industry experience',
      'Strong organizational skills',
      'Project management experience',
      'Excellent communication abilities',
      'Computer proficiency',
    ],
  },
  {
    title: 'Apprentice HVAC Technician',
    type: 'Full-Time',
    experience: 'Entry Level',
    description: 'Learn the HVAC trade from experienced professionals. Full training provided for motivated individuals.',
    requirements: [
      'No experience necessary',
      'Willingness to learn',
      'Physical fitness',
      'Reliable transportation',
      'Positive attitude',
    ],
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <Navigation />
      <PageHero
        title="Join Our Team"
        subtitle="Be part of a company that values quality workmanship, integrity, and teamwork"
      />

      <main className="py-16 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Why Work With Us */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
              Why Work at Pompano Beach House AC Repair?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-slate-100/80 border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-colors"
                >
                  <div className="bg-cyan-600/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Current Openings */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
              Current Openings
            </h2>
            <div className="space-y-6">
              {positions.map((position, index) => (
                <div
                  key={index}
                  className="bg-slate-100/80 border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-sm">
                        <span className="bg-cyan-600/10 text-cyan-600 px-3 py-1 rounded-full">
                          {position.type}
                        </span>
                        <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
                          {position.experience}
                        </span>
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      className="mt-4 md:mt-0 inline-block bg-cyan-600 hover:bg-cyan-700 text-slate-900 font-bold px-6 py-3 rounded-lg transition"
                    >
                      Apply Now
                    </Link>
                  </div>

                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {position.description}
                  </p>

                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start gap-2 text-slate-600">
                          <span className="text-cyan-600 mt-1">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Company Culture */}
          <section className="bg-slate-100/80 border border-slate-700 rounded-xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">
              Our Company Culture
            </h2>
            <div className="max-w-3xl mx-auto space-y-6 text-slate-600 leading-relaxed">
              <p>
                At Pompano Beach House AC Repair, we believe our employees are our greatest asset. We've built a
                company culture based on respect, integrity, and excellence. Every team member is
                valued and has opportunities to grow professionally.
              </p>
              <p>
                We provide ongoing training and certifications to help our team stay current with
                the latest HVAC technologies and best practices. Safety is our top priority, and
                we maintain strict safety protocols on every job site.
              </p>
              <p>
                Our team enjoys a supportive work environment where hard work is recognized and
                rewarded. We celebrate our successes together and support each other through challenges.
                If you're looking for a career, not just a job, Pompano Beach House AC Repair is the place for you.
              </p>
            </div>
          </section>

          {/* How to Apply */}
          <section className="bg-gradient-to-br from-cyan-600/10 to-slate-800/50 border border-cyan-500/30 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Ready to Join Our Team?
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              To apply for any position, please contact us with your resume and a brief introduction.
              We review all applications carefully and will reach out to qualified candidates.
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
              <div className="bg-slate-50/80 border border-slate-700 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-3">Email Your Resume</h3>
                <a
                  href="mailto:careers@pompanobeachhouseacrepair.com"
                  className="text-cyan-600 hover:text-cyan-500 transition"
                >
                  careers@pompanobeachhouseacrepair.com
                </a>
              </div>
              <div className="bg-slate-50/80 border border-slate-700 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-3">Call to Inquire</h3>
                <a
                  href="tel:+19542896718"
                  className="text-cyan-600 hover:text-cyan-500 transition"
                >
                  (954) 289-6718
                </a>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-block bg-cyan-600 hover:bg-cyan-700 text-slate-900 font-bold px-8 py-4 rounded-lg transition shadow-lg shadow-cyan-600/20"
            >
              Submit Application
            </Link>
          </section>

          {/* Equal Opportunity */}
          <div className="mt-12 pt-8 border-t border-slate-700">
            <p className="text-slate-500 text-center text-sm mb-6">
              Pompano Beach House AC Repair is an Equal Opportunity Employer. We celebrate diversity and are committed
              to creating an inclusive environment for all employees. All qualified applicants will receive
              consideration for employment without regard to race, color, religion, sex, national origin,
              disability status, protected veteran status, or any other characteristic protected by law.
            </p>
            <div className="text-center">
              <Link
                href="/"
                className="text-cyan-600 hover:text-cyan-500 transition inline-flex items-center gap-2"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
