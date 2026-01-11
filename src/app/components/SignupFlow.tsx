import { useState } from 'react';
import { Logo } from './common/Logo';
import { AuthLayout } from './common/AuthLayout';
import { Input, Select } from './common/Input';
import { Button } from './common/Button';
import { api, tokenManager } from '../../services/api';

interface SignupData {
  // Step 1: Personal Details
  name: string;
  surname: string;
  maritalStatus: string;
  bloodGroup: string;
  occupation: string;
  gender: 'male' | 'female';

  // Step 2: Address
  state: string;
  district: string;
  mandal: string;
  city: string;
  zipcode: string;
  address: string;

  // Step 3: Contact
  mobileNumber: string;
  whatsappNumber: string;
  email: string;
  sameAsWhatsApp: boolean;
  password?: string;
  confirmPassword?: string;
}

interface SignupFlowProps {
  referredBy?: string;
  onComplete: (data: SignupData) => void;
  onLoginClick: () => void;
}

function ProgressIndicator({ currentStep }: { currentStep: number }) {
  return (
    <div className="flex items-center justify-center gap-6 w-full">
      {[1, 2, 3].map((step) => (
        <div
          key={step}
          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentStep === step ? 'bg-orange-500 scale-125' : 'bg-gray-300'
            }`}
        />
      ))}
    </div>
  );
}

// Radio Button Component
function RadioButton({
  label,
  selected,
  onClick
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 cursor-pointer group"
    >
      <div className="relative w-5 h-5">
        <div className={`w-5 h-5 rounded-full border-2 transition-all ${selected ? 'border-orange-500' : 'border-gray-400 group-hover:border-gray-500'
          }`}>
          {selected && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-orange-500 rounded-full"></div>
          )}
        </div>
      </div>
      <span className="text-sm text-gray-600">{label}</span>
    </button>
  );
}

// Checkbox Component
function Checkbox({
  label,
  checked,
  onChange
}: {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className="flex items-center gap-2 cursor-pointer group"
    >
      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${checked ? 'bg-orange-500 border-orange-500' : 'border-gray-400 group-hover:border-gray-500'
        }`}>
        {checked && (
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
      <span className="text-sm text-gray-600">{label}</span>
    </button>
  );
}

// Step 1: Personal Details
function PersonalDetailsStep({
  data,
  onUpdate,
  onNext
}: {
  data: Partial<SignupData>;
  onUpdate: (field: keyof SignupData, value: any) => void;
  onNext: () => void;
}) {
  const maritalOptions = ['Single', 'Married', 'Divorced', 'Widowed'];
  const bloodGroupOptions = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];

  return (
    <div className="flex flex-col gap-4 w-full">
      <Input
        type="text"
        placeholder="Name*"
        value={data.name || ''}
        onChange={(value) => onUpdate('name', value)}
      />

      <Input
        type="text"
        placeholder="Surname*"
        value={data.surname || ''}
        onChange={(value) => onUpdate('surname', value)}
      />

      <Select
        value={data.maritalStatus || ''}
        onChange={(value) => onUpdate('maritalStatus', value)}
        placeholder="Marital status*"
        options={maritalOptions}
      />

      <Select
        value={data.bloodGroup || ''}
        onChange={(value) => onUpdate('bloodGroup', value)}
        placeholder="Blood group"
        options={bloodGroupOptions}
      />

      <Input
        type="text"
        placeholder="Occupation"
        value={data.occupation || ''}
        onChange={(value) => onUpdate('occupation', value)}
      />

      <div className="flex items-center gap-8 w-full">
        <span className="text-gray-600 font-medium">Gender*</span>
        <div className="flex gap-5">
          <RadioButton
            label="Male"
            selected={data.gender === 'male'}
            onClick={() => onUpdate('gender', 'male')}
          />
          <RadioButton
            label="Female"
            selected={data.gender === 'female'}
            onClick={() => onUpdate('gender', 'female')}
          />
        </div>
      </div>

      <Button onClick={onNext}>Next</Button>
    </div>
  );
}

// Step 2: Address
function AddressStep({
  data,
  onUpdate,
  onNext,
  onBack
}: {
  data: Partial<SignupData>;
  onUpdate: (field: keyof SignupData, value: any) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const states = ['Andhra Pradesh', 'Telangana', 'Karnataka', 'Tamil Nadu', 'Kerala'];
  const districts = ['Guntur', 'Krishna', 'East Godavari', 'West Godavari', 'Visakhapatnam'];
  const mandals = ['Tenali', 'Bapatla', 'Repalle', 'Sattenapalli'];
  const cities = ['Guntur', 'Vijayawada', 'Tenali', 'Mangalagiri'];

  return (
    <div className="flex flex-col gap-4 w-full">
      <Select
        value={data.state || ''}
        onChange={(value) => onUpdate('state', value)}
        placeholder="State*"
        options={states}
      />

      <Select
        value={data.district || ''}
        onChange={(value) => onUpdate('district', value)}
        placeholder="District*"
        options={districts}
      />

      <Select
        value={data.mandal || ''}
        onChange={(value) => onUpdate('mandal', value)}
        placeholder="Mandal*"
        options={mandals}
      />

      <Select
        value={data.city || ''}
        onChange={(value) => onUpdate('city', value)}
        placeholder="City*"
        options={cities}
      />

      <Input
        type="text"
        placeholder="Zipcode*"
        value={data.zipcode || ''}
        onChange={(value) => onUpdate('zipcode', value)}
      />

      <Input
        type="text"
        placeholder="Address*"
        value={data.address || ''}
        onChange={(value) => onUpdate('address', value)}
      />

      <Button onClick={onNext}>Next</Button>
    </div>
  );
}

// Step 3: Mobile & Email
function ContactStep({
  data,
  onUpdate,
  onComplete,
  onBack,
  loading,
  error
}: {
  data: Partial<SignupData> & { password?: string; confirmPassword?: string };
  onUpdate: (field: string, value: any) => void;
  onComplete: () => void;
  onBack: () => void;
  loading?: boolean;
  error?: string;
}) {
  return (
    <div className="flex flex-col gap-4 w-full">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      <div className="flex flex-col gap-2">
        <Input
          type="tel"
          placeholder="Mobile number*"
          value={data.mobileNumber || ''}
          onChange={(value) => {
            onUpdate('mobileNumber', value);
            if (data.sameAsWhatsApp) {
              onUpdate('whatsappNumber', value);
            }
          }}
        />
        <Checkbox
          label="Use the same number for WhatsApp?"
          checked={data.sameAsWhatsApp || false}
          onChange={(checked) => {
            onUpdate('sameAsWhatsApp', checked);
            if (checked) {
              onUpdate('whatsappNumber', data.mobileNumber || '');
            }
          }}
        />
      </div>

      <Input
        type="tel"
        placeholder="WhatsApp number"
        value={data.whatsappNumber || ''}
        onChange={(value) => onUpdate('whatsappNumber', value)}
        disabled={data.sameAsWhatsApp}
      />

      <Input
        type="email"
        placeholder="Email*"
        value={data.email || ''}
        onChange={(value) => onUpdate('email', value)}
      />

      <Input
        type="password"
        placeholder="Password* (min 6 characters)"
        value={data.password || ''}
        onChange={(value) => onUpdate('password', value)}
      />

      <Input
        type="password"
        placeholder="Confirm Password*"
        value={data.confirmPassword || ''}
        onChange={(value) => onUpdate('confirmPassword', value)}
      />

      <p className="text-xs text-gray-500">
        <span className="font-semibold">Note:</span> Your account will be created and you can login immediately after registration.
      </p>

      <Button onClick={onComplete} disabled={loading}>
        {loading ? 'Creating Account...' : 'Create Account'}
      </Button>
    </div>
  );
}

export default function SignupFlow({ referredBy, onComplete, onLoginClick }: SignupFlowProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Partial<SignupData>>({
    sameAsWhatsApp: false,
    gender: 'male'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const updateField = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleComplete = async () => {
    setError('');

    // Validation
    if (!formData.mobileNumber || !formData.email || !formData.password) {
      setError('Please fill in all required fields');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);

    try {
      const signupData = {
        name: formData.name || '',
        surname: formData.surname || '',
        mobile: formData.mobileNumber || '',
        email: formData.email || '',
        password: formData.password || '',
        date_of_birth: '', // Can be added if needed
        gender: formData.gender || 'male',
        country: 'India', // Default or from form
        state: formData.state || '',
        city: formData.city || '',
      };

      const response = await api.signup(signupData);

      // Store token and user data
      tokenManager.setToken(response.data.token);
      tokenManager.setUser(response.data.user);

      // Call the original onComplete callback
      onComplete(formData as SignupData);
    } catch (err: any) {
      console.error('Signup error:', err);

      // Handle validation errors from API
      if (err.messages) {
        const errorMessages = Object.values(err.messages).join(', ');
        setError(errorMessages);
      } else {
        setError(err.message || 'Failed to create account. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div className="flex flex-col gap-6 items-center w-full">
        <Logo />

        <div className="flex flex-col gap-6 w-full">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Registration</h2>
            <p className="text-sm text-gray-600">Enter your details to create an account</p>
            {referredBy && (
              <p className="text-sm font-semibold text-gray-800 mt-1">
                Referred by: {referredBy}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-4">
            {currentStep === 1 && (
              <PersonalDetailsStep
                data={formData}
                onUpdate={updateField}
                onNext={handleNext}
              />
            )}

            {currentStep === 2 && (
              <AddressStep
                data={formData}
                onUpdate={updateField}
                onNext={handleNext}
                onBack={handleBack}
              />
            )}

            {currentStep === 3 && (
              <ContactStep
                data={formData}
                onUpdate={updateField}
                onComplete={handleComplete}
                onBack={handleBack}
                loading={loading}
                error={error}
              />
            )}

            <ProgressIndicator currentStep={currentStep} />
          </div>

          <div className="text-center text-sm">
            <span className="text-gray-600">Have an account?</span>{' '}
            <button
              onClick={onLoginClick}
              className="text-gray-800 underline hover:text-orange-500 transition-colors font-medium"
            >
              Login here
            </button>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
