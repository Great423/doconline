import create from "zustand";

const useAppointmentStore = create((set) => ({
  appointment: {
    date: "",
    time: "",
    consultationType: "online", // default to online
  },
  setAppointment: (date, time, consultationType) => set((state) => ({
    appointment: { ...state.appointment, date, time, consultationType }
  })),
}));
