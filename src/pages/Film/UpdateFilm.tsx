import { useHeaderContext } from '@/components/SideNav/components/HeaderContext';
import React, { useEffect } from 'react'


const UpdateFilm:React.FC = () => {
    const { setTitle, setButtonLabel, setButtonLink } = useHeaderContext();

    useEffect(() => {
        setTitle("Ubah Data Film");
        setButtonLabel("Kembali");
        setButtonLink("/film");
    
        return () => {
          setTitle("Dashboard");
          setButtonLabel("");
          setButtonLink("");
        };
      }, [setTitle, setButtonLabel, setButtonLink]);

  return (
    <div>UpdateFilm</div>
  )
}


export default UpdateFilm;