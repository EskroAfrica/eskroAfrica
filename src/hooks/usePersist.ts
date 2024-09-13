import {useState, useEffect, Dispatch, SetStateAction} from 'react'

const usePersist = (): [boolean, Dispatch<SetStateAction<boolean>>] => {
    const [persist, setPersist] = useState<boolean>(() => {
      const storedPersist = localStorage.getItem('persist');
      return storedPersist ? JSON.parse(storedPersist) : false;
    });
  
    useEffect(() => {
      localStorage.setItem('persist', JSON.stringify(persist));
    }, [persist]);
  
    return [persist, setPersist];
  };

export default usePersist 