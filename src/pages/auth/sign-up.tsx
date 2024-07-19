import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

const signUpForm = z.object({
  name: z.string(),
  email: z.string().email(),
});
type SignUpForm = z.infer<typeof signUpForm>;
export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>();
  const navigate = useNavigate();

  async function handleSignUp(data: SignUpForm) {
    try {
      console.log(data);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      toast.success("Cadastro feito com sucesso", {
        action: {
          label: "Login",
          onClick: () => navigate("/sign-in"),
        },
      });
    } catch {
      toast.error("Erro ao cadastrar");
    }
  }
  return (
    <div className="p-8">
      <Button variant={"ghost"} asChild className="absolute right-4 top-8">
        <Link to="/sign-in">Login</Link>
      </Button>
      <Helmet title="Cadastro" />
      <div className="flex w-[340px] flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Cria a sua conta
          </h1>
          <p className="text-sm text-muted-foreground">
            Seja um usuário no Yellow
          </p>
        </div>
        <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Seu Nome</Label>
            <Input id="name" type="text" {...register("name")} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Seu Email</Label>
            <Input id="email" type="email" {...register("email")} />
          </div>
          <Button disabled={isSubmitting} className="w-full" type="submit">
            Finalizar cadastro
          </Button>
          <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
            Ao continuar, você concorda com os
            <a href="#" className="underline underline-offset-4">
              {" "}
              termos de serviços
            </a>{" "}
            e{" "}
            <a href="#" className="underline underline-offset-4">
              politica de privacidade
            </a>
            .
          </p>
        </form>
      </div>
    </div>
  );
}
