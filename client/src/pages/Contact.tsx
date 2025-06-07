import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MessageSquare, Linkedin, Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required").min(2, "Name must be at least 2 characters"),
  email: z.string().min(1, "Email is required").email("Please enter a valid email address"),
  subject: z.string().optional(),
  message: z.string().min(1, "Message is required").min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = "Contact - Flagship Software";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Get in touch with Flagship Software. Contact us via email, Discord, or social media. Ready to start your next project? We'd love to hear from you.");
    }
  }, []);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact us directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "hello@flagshipsoftware.com",
      href: "mailto:hello@flagshipsoftware.com",
      iconBg: "bg-[hsl(24,100%,48%)]/10",
      iconColor: "text-[hsl(24,100%,48%)]"
    },
    {
      icon: MessageSquare,
      title: "Discord",
      description: "Join our community server",
      href: "#",
      iconBg: "bg-[hsl(24,100%,48%)]/10",
      iconColor: "text-[hsl(24,100%,48%)]"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "/company/flagship-software",
      href: "#",
      iconBg: "bg-[hsl(24,100%,48%)]/10",
      iconColor: "text-[hsl(24,100%,48%)]"
    },
    {
      icon: Twitter,
      title: "Twitter / X",
      description: "@FlagshipSoft",
      href: "#",
      iconBg: "bg-[hsl(24,100%,48%)]/10",
      iconColor: "text-[hsl(24,100%,48%)]"
    }
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-[hsl(0,0%,52.5%)]">
            Ready to start your next project? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
            
            <div className="space-y-6">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${method.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className={`${method.iconColor} h-5 w-5`} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{method.title}</h3>
                      <a href={method.href} className="text-[hsl(24,100%,48%)] hover:underline">
                        {method.description}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Send us a Message</h2>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-[hsl(0,0%,11.4%)]">
                        Name *
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your full name"
                          className="px-4 py-3 border-gray-300 focus:ring-[hsl(24,100%,48%)] focus:border-transparent"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-[hsl(0,0%,11.4%)]">
                        Email *
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your.email@example.com"
                          className="px-4 py-3 border-gray-300 focus:ring-[hsl(24,100%,48%)] focus:border-transparent"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-[hsl(0,0%,11.4%)]">
                        Subject
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="What's this about?"
                          className="px-4 py-3 border-gray-300 focus:ring-[hsl(24,100%,48%)] focus:border-transparent"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-[hsl(0,0%,11.4%)]">
                        Message *
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          rows={6}
                          placeholder="Tell us about your project or question..."
                          className="px-4 py-3 border-gray-300 focus:ring-[hsl(24,100%,48%)] focus:border-transparent resize-vertical"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
