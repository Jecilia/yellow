import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

const signInForm = z.object({
  email: z.string().email(),
});
type SignInForm = z.infer<typeof signInForm>;
export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>();

  async function handleSignIn(data: SignInForm) {
    try {
      console.log(data);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      toast.success("Enviamos um link de autenticação para o seu Email!", {
        action: {
          label: "Reenviar",
          onClick: () => handleSignIn(data),
        },
      });
    } catch {
      toast.error("Email inválido");
    }
  }
  return (
    <div className="p-8">
      <Button variant={"ghost"} asChild className="absolute right-4 top-8">
        <Link to="/sign-up">Faça o seu cadastro</Link>
      </Button>
      <Helmet title="Login" />
      <div className="flex w-[340px] flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Acessar ao Yellow
          </h1>
          <p className="text-sm text-muted-foreground">
            Acompanhe os postes, e participe!
          </p>
        </div>
        <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Seu Email</Label>
            <Input id="email" type="email" {...register("email")} />
          </div>
          <Button disabled={isSubmitting} className="w-full" type="submit">
            Acesse o Yellow
          </Button>
        </form>
      </div>
    </div>
  );
}
