
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { toast } from '@/hooks/use-toast';

interface ContactFormProps {
  buttonText: string;
  buttonClassName?: string;
}

const ContactForm = ({ buttonText, buttonClassName }: ContactFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    adSpend: '',
    businessType: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Application Submitted",
      description: "We'll review your information and get back to you within 24 hours.",
    });
    setIsOpen(false);
    setFormData({
      name: '',
      email: '',
      website: '',
      adSpend: '',
      businessType: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className={buttonClassName || "bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold"}>
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Apply For Your Free Creative Performance Diagnosis
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <Label htmlFor="name" className="text-sm font-medium text-gray-700">
              Name *
            </Label>
            <Input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
              Work Email *
            </Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="website" className="text-sm font-medium text-gray-700">
              Website URL *
            </Label>
            <Input
              id="website"
              type="url"
              required
              value={formData.website}
              onChange={(e) => handleInputChange('website', e.target.value)}
              placeholder="https://yourwebsite.com"
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="adSpend" className="text-sm font-medium text-gray-700">
              Current Monthly Ad Spend *
            </Label>
            <Input
              id="adSpend"
              type="text"
              required
              value={formData.adSpend}
              onChange={(e) => handleInputChange('adSpend', e.target.value)}
              placeholder="e.g., $10,000"
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="businessType" className="text-sm font-medium text-gray-700">
              Which best describes you? *
            </Label>
            <Select required value={formData.businessType} onValueChange={(value) => handleInputChange('businessType', value)}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="launching">Launching a New Product</SelectItem>
                <SelectItem value="scaling">Scaling an Existing Product</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 mt-6"
          >
            Submit Application
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;
