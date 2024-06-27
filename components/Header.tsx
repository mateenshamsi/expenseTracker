import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { checkUser } from "../lib/checkUser";

const Header = async() => {
    const user = await checkUser()
   
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <h2 className="text-4xl grey-400">Expense Tracker</h2>
                
                   <SignedOut>
                            <SignInButton />
                    </SignedOut>
                    <SignedIn>
                            <UserButton />
                    </SignedIn>
                
            </div>
        </nav>
    );
}

export default Header;
