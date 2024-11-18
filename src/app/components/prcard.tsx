import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Facebook, Twitter, Linkedin } from 'lucide-react'

export default function Prcard () {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center p-6 space-y-4 sm:space-y-0 sm:space-x-6">
        <Avatar className="w-24 h-24 sm:w-32 sm:h-32">
          <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Foto de perfil" />
          <AvatarFallback>JP</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-center sm:items-start space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold">Juan Pérez</h1>
          <h2 className="text-xl text-muted-foreground">Desarrollador Full Stack</h2>
          <p className="text-sm text-muted-foreground">Madrid, España</p>
          <div className="flex space-x-2 mt-2">
            <Badge variant="secondary" className="flex items-center space-x-1">
              <Facebook className="w-4 h-4" />
              <span>Facebook</span>
            </Badge>
            <Badge variant="secondary" className="flex items-center space-x-1">
              <Twitter className="w-4 h-4" />
              <span>Twitter</span>
            </Badge>
            <Badge variant="secondary" className="flex items-center space-x-1">
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </Badge>
          </div>
        </div>
      </div>
    </Card>
  )
}