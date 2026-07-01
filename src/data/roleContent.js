import { ROLES } from '../constants/roles';

export const roleContent = {
  [ROLES.MOTHER]: {
    title: 'How would you like to calculate your pregnancy?',
    subtitle:
      "Let's understand how far along you are so we can personalize your journey.",

    options: {
      dueDate: {
        title: 'I know my Due Date',
        subtitle: "I know my baby's expected due date.",
      },

      lmp: {
        title: 'Last Menstrual Period (LMP)',
        subtitle: 'Best if your menstrual cycle is regular.',
      },

      ultrasound: {
        title: 'Ultrasound / Dating Scan',
        subtitle: "I'll use my doctor's ultrasound report.",
      },

      currentWeek: {
        title: 'I Already Know My Pregnancy Week',
        subtitle: 'Enter my current pregnancy week.',
      },
    },
  },

  [ROLES.PARTNER]: {
    title: "Tell us about your partner's pregnancy",
    subtitle:
      "We'll help you support every step of the journey together.",

    options: {
      dueDate: {
        title: 'We Know the Due Date',
        subtitle: "We know the baby's expected due date.",
      },

      lmp: {
        title: 'We Know the Last Menstrual Period',
        subtitle: "We'll calculate everything from it.",
      },

      ultrasound: {
        title: 'We Have an Ultrasound Report',
        subtitle: "We'll use the doctor's report.",
      },

      currentWeek: {
        title: 'We Already Know the Pregnancy Week',
        subtitle: "We'll enter the current pregnancy week.",
      },
    },
  },

  [ROLES.BOTH]: {
    title: "Let's set up your pregnancy journey",
    subtitle:
      "We'll personalize the experience for both of you.",

    options: {
      dueDate: {
        title: 'We Know the Due Date',
        subtitle: "We'll calculate everything together.",
      },

      lmp: {
        title: 'Last Menstrual Period (LMP)',
        subtitle: "We'll calculate your pregnancy timeline.",
      },

      ultrasound: {
        title: 'Ultrasound / Dating Scan',
        subtitle: "We'll use your doctor's report.",
      },

      currentWeek: {
        title: 'We Already Know the Pregnancy Week',
        subtitle: 'Enter the current pregnancy week.',
      },
    },
  },
};