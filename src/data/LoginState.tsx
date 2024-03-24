import React from 'react'
import { create } from 'zustand'

type State = {
  logged: boolean
}

type Action = {
  loggingIn: (logged: State['logged']) => void
  logginOut: (logged: State['logged']) => void
}

const useLoginStore = create<State & Action>((set) => ({
  logged: false,
  loggingIn: (logged) => set(() => ({ logged: true })),
  logginOut: (logged) => set(() => ({ logged: false })),
}))

const LoginState = () => {
  return (
    <div>LoginState</div>
  )
}

export default LoginState