
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Calculator, TrendingUp, BadgeDollarSign } from "lucide-react";

type ROIScenario = {
  title: string;
  icon: React.ReactNode;
  investment: string;
  clientsConverted: string;
  revenuePerClient: string;
  totalRevenue: string;
  roi: string;
  bgColor: string;
};

const ROICalculator: React.FC = () => {
  const scenarios: ROIScenario[] = [
    {
      title: "Conservative Scenario",
      icon: <Calculator className="h-6 w-6" />,
      investment: "₹3,000",
      clientsConverted: "2 clients",
      revenuePerClient: "₹20,000",
      totalRevenue: "₹40,000",
      roi: "1,233%",
      bgColor: "bg-white"
    },
    {
      title: "Moderate Scenario",
      icon: <TrendingUp className="h-6 w-6" />,
      investment: "₹3,000",
      clientsConverted: "5 clients",
      revenuePerClient: "₹30,000",
      totalRevenue: "₹1,50,000",
      roi: "4,900%",
      bgColor: "bg-brand-blue/5"
    },
    {
      title: "Optimistic Scenario",
      icon: <BadgeDollarSign className="h-6 w-6" />,
      investment: "₹3,000",
      clientsConverted: "10 clients",
      revenuePerClient: "₹50,000",
      totalRevenue: "₹5,00,000",
      roi: "16,567%",
      bgColor: "bg-brand-orange/5"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {scenarios.map((scenario, index) => (
        <Card key={index} className={`border border-brand-gray ${scenario.bgColor} hover:shadow-md transition-all duration-300`}>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <div className={`p-2 rounded-full ${index === 0 ? 'bg-brand-navy/10' : index === 1 ? 'bg-brand-blue/10' : 'bg-brand-orange/10'}`}>
                {scenario.icon}
              </div>
              <CardTitle className="text-xl font-bold text-brand-navy">{scenario.title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between border-b border-brand-gray/50 pb-2">
                <span className="text-gray-600">Investment</span>
                <span className="font-semibold">{scenario.investment}</span>
              </div>
              <div className="flex justify-between border-b border-brand-gray/50 pb-2">
                <span className="text-gray-600">Clients Converted</span>
                <span className="font-semibold">{scenario.clientsConverted}</span>
              </div>
              <div className="flex justify-between border-b border-brand-gray/50 pb-2">
                <span className="text-gray-600">Revenue per Client</span>
                <span className="font-semibold">{scenario.revenuePerClient}</span>
              </div>
              <div className="flex justify-between border-b border-brand-gray/50 pb-2">
                <span className="text-gray-600">Total Revenue</span>
                <span className="font-semibold">{scenario.totalRevenue}</span>
              </div>
              <div className="flex justify-between pt-2">
                <span className="text-gray-600 font-semibold">ROI</span>
                <span className={`font-bold text-xl ${index === 0 ? 'text-brand-navy' : index === 1 ? 'text-brand-blue' : 'text-brand-orange'}`}>
                  {scenario.roi}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ROICalculator;
