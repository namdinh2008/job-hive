import { Mail, Phone, MapPin } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <div className="container py-8">
      <div className="space-y-6 max-w-4xl mx-auto">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight">Contact Us</h1>
          <p className="text-muted-foreground">Have questions or need assistance? We're here to help.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Email</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-muted-foreground mr-2" />
                <a href="mailto:info@jobhive.com" className="hover:underline">
                  info@jobhive.com
                </a>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Phone</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-muted-foreground mr-2" />
                <a href="tel:+1234567890" className="hover:underline">
                  (123) 456-7890
                </a>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Office</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-muted-foreground mr-2" />
                <span>123 Job Street, Career City</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Our Location</CardTitle>
            <CardDescription>Visit our office or send us mail at this address.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-video w-full overflow-hidden rounded-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059353029!2d-74.25986548248684!3d40.69714941512199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1620796614538!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="JobHive Office Location"
              ></iframe>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
