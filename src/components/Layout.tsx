import {Outlet} from 'react-router';
import { Header } from './Header';
export function Layout(){
return (
    <div className="bg-radial from-[#133036] to-[#0a181b] min-h-screen">
              <Header />
              <main className="flex justify-start">
                <Outlet />
              </main>
            </div>
);


}