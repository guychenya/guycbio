import React from 'react';
import Header from './components/Header';
import ExecutiveSummary from './components/ExecutiveSummary';
import CoreCompetencies from './components/CoreCompetencies';
import ProfessionalExperience from './components/ProfessionalExperience';
import Education from './components/Education';
import Languages from './components/Languages';
import profilePic from './assets/profile.jpeg'; // Import the new profile picture

function App() {
  const bioData = {
    name: 'GUY CHENYA',
    titles: [
      'Head of Delivery Project Management',
      'Digital Transformation Leader',
      'Enterprise Solutions Architect'
    ],
    contact: {
      location: 'Even-Yehuda, Israel',
      phone: '+972 54.222.80.25',
      email: 'guy.chenya@gmail.com',
      linkedin: 'https://www.linkedin.com/in/guychenya'
    },
    summary: 'Strategic technology executive with 20+ years of experience driving digital transformation and project delivery across regulated industries. Proven track record implementing enterprise-scale solutions while optimizing team efficiency and standardizing processes across global operations. Expert in leading cross-functional teams through periods of rapid growth and change. Skilled at building scalable project management frameworks that balance standardization with client-specific flexibility. Recognized for driving operational excellence and maintaining high customer satisfaction during organizational expansion.',
    competencies: [
      'Program Development & Scaling',
      'Strategic Partnership Management',
      'Data-Driven Decision Making',
      'Change & Stakeholder Management',
      'Resource Optimization',
      'Outcome Measurement'
    ],
    experience: [
      {
        company: 'TEVA PHARMACEUTICALS | Global Quality Compliance',
        roles: [
          {
            title: 'Senior Manager, Global Quality Computer Systems',
            period: '2020 – Present',
            points: [
              '<strong>Team Leadership:</strong> Manage and mentor a team of 12 project managers across 4 regions, improving team efficiency by 35% while maintaining 98% on-time project delivery.',
              '<strong>Process Standardization:</strong> Developed global implementation methodology that reduced project setup time by 40% while accommodating regional regulatory requirements.',
              '<strong>Resource Optimization:</strong> Implemented capacity planning framework that improved team utilization by 28% and enabled accurate forecasting for future staffing needs.',
              '<strong>Cross-functional Collaboration:</strong> Established governance structure aligning IT, Quality, and Operations teams, resulting in 42% faster decision-making and improved project execution.',
              '<strong>Change Management:</strong> Led organizational transformation from siloed regional operations to standardized global delivery model, achieving 92% user adoption within 6 months.'
            ]
          },
          {
            title: 'Business Deployment Relationship Manager',
            period: '2013 – 2020',
            points: [
              '<strong>Global Scale Operations:</strong> Managed deployment of standardized quality processes across 80+ sites in North America, Latin America, Europe, and Asia.',
              '<strong>KPI Development:</strong> Created comprehensive metrics dashboard tracking implementation progress, resource utilization, and customer satisfaction across all regions.',
              '<strong>Risk Management:</strong> Implemented structured risk assessment methodology reducing implementation delays by 35% and improving project predictability.',
              '<strong>Process Optimization:</strong> Redesigned project delivery workflows, reducing implementation cycle time by 23% while improving quality outcomes.'
            ]
          }
        ]
      },
      {
        company: 'SPARTA SYSTEMS, INC. (TRACKWISE® SOLUTIONS)',
        roles: [
            {
                title: 'Implementation Team Leader',
                period: '2009 – 2012',
                points: [
                    '<strong>Project Portfolio Management:</strong> Oversaw 12+ concurrent enterprise implementations with 100% on-time completion and 95% client satisfaction.',
                    '<strong>Team Development:</strong> Built and mentored high-performing project management team, reducing turnover by 25% and improving delivery consistency.'
                ]
            },
            {
                title: 'Senior Global Project Manager & Product Specialist',
                period: '2006 – 2009',
                points: [
                    '<strong>Enterprise Implementation:</strong> Led complex TrackWise deployments for global pharmaceutical clients including Sanofi-Aventis, AstraZeneca, and Novartis.',
                    '<strong>Process Design:</strong> Developed standardized implementation frameworks that balanced corporate requirements with site-specific needs.'
                ]
            }
        ]
      }
    ],
    education: {
        mba: '<strong>MBA in Technology Management & Information Systems</strong> | Tel Aviv University',
        bsc: '<strong>BSc in Industrial & Management Engineering (Information Systems)</strong> | Technion – Israel Institute of Technology',
        certifications: '<strong>Certifications:</strong> Lean Six Sigma Black Belt, SAP SuccessFactors Implementation Specialist, TrackWise Certified Administrator, AI for Business Transformation (MIT Sloan), Agile Project Management'
    },
    languages: 'English: Full Professional Proficiency | Hebrew: Native | Spanish: Limited Working Proficiency'
  };

  return (
    <>
      <Header 
        name={bioData.name}
        titles={bioData.titles}
        contact={bioData.contact}
        profilePic={profilePic}
      />
      <main>
        <ExecutiveSummary summary={bioData.summary} />
        <CoreCompetencies competencies={bioData.competencies} />
        <ProfessionalExperience experience={bioData.experience} />
        <Education education={bioData.education} />
        <Languages languages={bioData.languages} />
      </main>
    </>
  );
}

export default App;
