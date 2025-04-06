export interface Profile {
  id: number;
  name: string;
  age: number;
  job: string;
  city: string;
  origin: string;
  image: string;
}

export interface SwipeCardProps {
  profile: Profile;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  onSwipeUp: () => void;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
}

export interface QuestionModalProps extends ModalProps {
  onSubmit: (question: string) => void;
} 