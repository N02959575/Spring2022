import { useMessages } from './messages';
import {reactive} from "vue";
import router from "../router";

import * as users from "../models/user";

const session =reactive({

        user: null as users.User | null,
        destinationUrl: null as string | null,
    
}) 

export async function Login(handle: string, password: string) {
    const user = users.list.find(u => u.handle === handle);
    const messages = useMessages();

    try {

        if(!user){
            throw {message: "User not found"}
        }
        if(user.password !== password){
            throw {message: "Incorrect password"}
        }

        messages.notifications.push({
            type: "success",
            message: `Welcome back ${user.firstName}`,
        });
    
        session.user = user;
        router.push(session.destinationUrl ?? '/wall')
        
    } catch (error: any) {
        
        messages.notifications.push({
            type: "danger",
            message: error.message,
        });
    }
    
}

export function Logout(){
    session.user = null;
    router.push('/login')
}

export default session;