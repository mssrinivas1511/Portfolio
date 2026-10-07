const SkillsSection = () => {
  const skillGroups = [
    {
      title: 'Product Management',
      skills: [
        'Product Discovery',
        'Requirement Gathering',
        'PRDs',
        'User Stories & Acceptance Criteria',
        'User Journeys',
        'Prioritisation (RICE, MoSCoW)',
        'Roadmapping',
        'Go-to-Market',
        'Stakeholder Management',
      ],
    },
    {
      title: 'Analytics & Research',
      skills: [
        'Mixpanel',
        'KPI & Success Metrics',
        'Adoption & Retention Analysis',
        'Market Research',
        'Competitor Analysis',
        'User Personas',
      ],
    },
    {
      title: 'Delivery',
      skills: [
        'Agile/Scrum',
        'Jira',
        'Confluence',
        'UAT',
        'Release Management',
        'Cross-functional Collaboration',
      ],
    },
    {
      title: 'Domain & AI',
      skills: [
        'Subscription Commerce',
        'Payments (Razorpay, Easebuzz)',
        'WhatsApp Business API',
        'NLP-based Conversational AI',
        'Generative AI',
      ],
    },
    {
      title: 'Tools',
      skills: [
        'Figma',
        'Balsamiq',
        'Zoho Campaigns',
        'MS Excel',
        'PowerPoint',
      ],
    },
  ];

  const education = [
    {
      title: 'B.Tech, Mechanical Engineering',
      detail: 'Andhra University, Visakhapatnam · 2022',
    },
    {
      title: 'Product Management with Gen AI',
      detail: 'PW Skills',
    },
  ];

  return (
    <section id="skills" className="portfolio-section">
      <div className="portfolio-container">
        <div className="section-heading">
          <p className="eyebrow mb-3">Capabilities</p>
          <h2 className="mb-6">Skills &amp; Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            How I turn customer problems into shipped, measured product.
          </p>
        </div>

        <div className="space-y-8 max-w-[720px] mx-auto">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="eyebrow mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-full border bg-card px-3.5 py-1.5 text-sm text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-[720px] mx-auto mt-14 pt-10 border-t">
          <h3 className="eyebrow mb-6">Education &amp; Certifications</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {education.map((item) => (
              <div key={item.title} className="rounded-xl border bg-card p-5">
                <p className="font-semibold text-foreground">{item.title}</p>
                <p className="text-sm text-muted-foreground mt-1">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
