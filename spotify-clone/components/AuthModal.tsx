"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

import useAuthModal from "@/hooks/useAuthModal";

import Modal from "./Modals";


const AuthModal = () => {

    {/*Set session*/}
    const {session} = useSessionContext();

    {/*Set navigation*/}
    const router = useRouter();

    {/*Trigger modal*/}
    const {onClose, isOpen} = useAuthModal();

    {/*Getting Supabase client*/}
    const supabaseClient = useSupabaseClient();


    useEffect(() => {
        if (session) {
            router.refresh();
            onClose();
        }
    }, [session, router, onClose]);

    const onChange = (open : boolean) => {
        if (!open) {
            onClose();
        };
    };

    return (
        <Modal
        title="Welcome back!"
        description="Login to your account"
        isOpen={isOpen}
        onChange={onChange}
        >
          <Auth
          providers = {['github']}
          supabaseClient={supabaseClient}
          magicLink = {true}
          appearance={{
            theme : ThemeSupa,
            variables : {
                default : {
                    colors : {
                        brand : '#0f172a',
                        brandAccent : '#22C55E'
                    }
                }
            }
          }}
          />   
        </Modal>
    );
};

export default AuthModal;
