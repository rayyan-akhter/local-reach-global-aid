import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, FileCheck, MessageSquare, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";

const Services = () => {
  const mainServices = [
    {
      icon: MapPin,
      title: "Field Project Support",
      items: [
        {
          subtitle: "Project Site Verification",
          description: "Conduct site visits, verify ongoing activities, and ensure projects adhere to original plans."
        },
        {
          subtitle: "Local Resource Coordination",
          description: "Hire and manage local staff, vendors, and volunteers efficiently."
        },
        {
          subtitle: "Team Management & Logistics",
          description: "Organize transportation, accommodation, and field operations for smooth execution."
        }
      ]
    },
    {
      icon: FileCheck,
      title: "Documentation & Verification",
      items: [
        {
          subtitle: "NGO & Partner Background Checks",
          description: "Verify partner NGOs and stakeholders to mitigate risks."
        },
        {
          subtitle: "Legal & Compliance Verification",
          description: "Ensure all Indian regulations are followed, including registration, taxation, and reporting requirements."
        },
        {
          subtitle: "Field Inspection Reporting",
          description: "Provide detailed reports, photographs, and impact assessments for stakeholders."
        }
      ]
    },
    {
      icon: MessageSquare,
      title: "Communication & Coordination",
      items: [
        {
          subtitle: "Translation & Meeting Coordination",
          description: "Facilitate communication with local authorities and communities in multiple languages."
        },
        {
          subtitle: "On-Ground Event Management",
          description: "Organize workshops, community meetings, and program launches effectively."
        },
        {
          subtitle: "Stakeholder Liaison",
          description: "Serve as the bridge between international NGOs, local government, and community leaders."
        }
      ]
    },
    {
      icon: TrendingUp,
      title: "Additional Services",
      items: [
        {
          subtitle: "Impact Assessment & Evaluation",
          description: "Measure project outcomes and provide comprehensive impact reports."
        },
        {
          subtitle: "Emergency Response Support",
          description: "Rapid deployment support for relief and humanitarian aid programs."
        },
        {
          subtitle: "Local Training & Capacity Building",
          description: "Workshops and sessions for local teams to maintain sustainability."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive support to ensure your projects are executed with excellence and transparency
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-12">
          {mainServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border-border overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10 border-b border-border">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary text-primary-foreground rounded-lg">
                      <Icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-2xl md:text-3xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6 md:p-8">
                  <div className="space-y-6">
                    {service.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex gap-4">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-2 h-2 rounded-full bg-secondary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">
                            {item.subtitle}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="border-border bg-gradient-to-r from-accent/10 to-accent/5">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Need Customized Support?
              </h2>
              <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
                We understand that every project is unique. Contact us to discuss how we can tailor our services to meet your specific needs.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
              >
                Get in Touch
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Services;