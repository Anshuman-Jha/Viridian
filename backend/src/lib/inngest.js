import {Inngest} from "inngest";
import {ENV} from "./env.js";
import { connectDB } from "./db.js";
import {User} from "../models/User.js";


export const inngest = new Inngest({id: "viridian-inngest"});

const syncUser = inngest.createFunction(
   {id: "sync-user"},
   {event: "clerk/user.created" },
   async ({event}) => {
    await connectDB();   

    const {id, email_addresses, first_name, last_name, image_url} = event.data;
  
      const newUser = {
        clerkId: id,
        email: email_addresses[0]?.email,
        name: `${first_name || ""} ${last_name || ""}`,
        profileImage: image_url || ""
      }

       await User.create(newUser);
}
);

const delete_user = inngest.createFunction(
    {id: "delete-user"},
    {event: "clerk/use{{r.deleted"},
    async({event}) => {

        await connectDB();
    
        const {id} = event.data;

        await User.findOneAndDelete({clerkId: id})

    }
)

export const functions = [syncUser];
