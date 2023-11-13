<<<<<<< HEAD
import { LoginUser } from "../types";
import { create } from "zustand";

interface UserStore {
  user: LoginUser | null;
  setUser: (user: LoginUser | null) => void;
}

const useUserStore = create<UserStore>(set => ({
  user: null,
  setUser: (user: LoginUser | null) => {set((state) => ({ ...state, user }))},
}));

export default useUserStore;
=======
import { User } from "types";
import { create } from 'zustand';
import { userMock } from "mocks";

interface UserStore {
    user: User;
    setUser: (user: User) => void;
}

const useUserStore = create<UserStore>((set) => ({
    user: userMock,
    setUser: (user: User) => { set((state) => ({...state, user})) }
}));

export default useUserStore;
>>>>>>> main
