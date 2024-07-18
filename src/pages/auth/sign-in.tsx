import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";

export function SignIn() {
  return (
    <div className="p-8">
      <Helmet title="Login" />
      <div className="flex w-[350px] flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
          <p className="text-sm text-muted-foreground">Acesse o Yellow</p>
        </div>
        <form action="" className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Seu Email</Label>
            <Input id="email" type="email" />
          </div>
          <Button className="w-full" type="submit">
            Entrar
          </Button>
        </form>
      </div>
    </div>
  );
}
