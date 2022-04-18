import { defineStore } from 'pinia';
import { useMessages } from './messages';
import router from "../router";
import * as users from "../models/user";
import { api } from './myFetch';

export const useSession = defineStore( 'session', {
    state: () => ({
        user: null as users.User | null,
        destinationUrl: null as string | null,
    }),
    
    actions: {
        async Login(email: string, password: string) {
    
            const messages = useMessages();
        
            try {
                const user = await api("users/login", { email, password });
        
                if(user) {
        
                    messages.notifications.push({
                        type: "success",
                        message: `Welcome back ${user.firstName}`,
                    });
                
                    this.user = user;
                    router.push(this.destinationUrl ?? '/wall');
                }
                
            } catch (error: any) {
                
                messages.notifications.push({
                    type: "danger",
                    message: error.message,
                });
            }
            
        },

        Logout(){
            this.user = null;
            router.push('/login')
        }
    },
})