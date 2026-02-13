import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Leaf, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

export default function BambooRestockSite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 text-green-900">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-extrabold mb-4"
        >
         Bamboo Restock
        </motion.h1>
        <p className="text-xl mb-6">Restocked Finds. Real Savings.</p>
        <Button className="rounded-2xl text-lg px-8 py-6 shadow-lg">
          Shop the Finds
        </Button>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-6 px-8 pb-20 max-w-6xl mx-auto">
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6 text-center">
            <ShoppingBag className="mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">Weekly Restocks</h3>
            <p>New liquidation and overstock items added regularly.</p>
          </CardContent>
        </Card>
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6 text-center">
            <DollarSign className="mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">Real Savings</h3>
            <p>Big brands, small prices. No gimmicks.</p>
          </CardContent>
        </Card>
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6 text-center">
            <Leaf className="mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">Smart Resale</h3>
            <p>Eco-friendly shopping through restock & reuse.</p>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-green-700">
        © {new Date().getFullYear()} Bamboo Restock · All rights reserved
      </footer>
    </div>
  );
}
