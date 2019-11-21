import React,{Component} from 'react';

import Kursus from './state/State';
import Materi from './props/Props';
import Materi2 from './props/props2';



import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;

class App extends Component {
  render(){
    return(
      
        <div>
      <Kursus/>
      <p>NEWS</p>
      <hr/>
      <Materi img={require('./props/1.jpg')} des="Indonesia Digital HOME (disingkat IndiHOME) adalah salah satu produk layanan dari PT Telekomunikasi Indonesia berupa paket layanan komunikasi dan data seperti telepon rumah (voice), internet (Internet on Fiber atau High Speed Internet), dan layanan televisi interaktif (USee TV Cable, IP TV).[1] Karena penawaran inilah Telkom memberi label IndiHOME sebagai tiga layanan dalam satu paket (3-in-1) karena selain internet, pelanggan juga mendapatkan tayangan TV berbayar dan saluran telepon"/>
      <Materi img={require('./props/1.jpg')} des="Indonesia Digital HOME (disingkat IndiHOME) adalah salah satu produk layanan dari PT Telekomunikasi Indonesia berupa paket layanan komunikasi dan data seperti telepon rumah (voice), internet (Internet on Fiber atau High Speed Internet), dan layanan televisi interaktif (USee TV Cable, IP TV).[1] Karena penawaran inilah Telkom memberi label IndiHOME sebagai tiga layanan dalam satu paket (3-in-1) karena selain internet, pelanggan juga mendapatkan tayangan TV berbayar dan saluran telepon"/>
      
      <Materi2 img2={require('./props/1.jpg')} des2="Indonesia Digital HOME (disingkat IndiHOME) adalah salah satu produk layanan dari PT Telekomunikasi Indonesia berupa paket layanan komunikasi dan data seperti telepon rumah (voice), internet (Internet on Fiber atau High Speed Internet), dan layanan televisi interaktif (USee TV Cable, IP TV).[1] Karena penawaran inilah Telkom memberi label IndiHOME sebagai tiga layanan dalam satu paket (3-in-1) karena selain internet, pelanggan juga mendapatkan tayangan TV berbayar dan saluran telepon"/>
      <Materi2 img2={require('./props/1.jpg')} des2="Indonesia Digital HOME (disingkat IndiHOME) adalah salah satu produk layanan dari PT Telekomunikasi Indonesia berupa paket layanan komunikasi dan data seperti telepon rumah (voice), internet (Internet on Fiber atau High Speed Internet), dan layanan televisi interaktif (USee TV Cable, IP TV).[1] Karena penawaran inilah Telkom memberi label IndiHOME sebagai tiga layanan dalam satu paket (3-in-1) karena selain internet, pelanggan juga mendapatkan tayangan TV berbayar dan saluran telepon"/>
      <Materi2 img2={require('./props/1.jpg')} des2="Indonesia Digital HOME (disingkat IndiHOME) adalah salah satu produk layanan dari PT Telekomunikasi Indonesia berupa paket layanan komunikasi dan data seperti telepon rumah (voice), internet (Internet on Fiber atau High Speed Internet), dan layanan televisi interaktif (USee TV Cable, IP TV).[1] Karena penawaran inilah Telkom memberi label IndiHOME sebagai tiga layanan dalam satu paket (3-in-1) karena selain internet, pelanggan juga mendapatkan tayangan TV berbayar dan saluran telepon"/>
      <Materi2 img2={require('./props/1.jpg')} des2="Indonesia Digital HOME (disingkat IndiHOME) adalah salah satu produk layanan dari PT Telekomunikasi Indonesia berupa paket layanan komunikasi dan data seperti telepon rumah (voice), internet (Internet on Fiber atau High Speed Internet), dan layanan televisi interaktif (USee TV Cable, IP TV).[1] Karena penawaran inilah Telkom memberi label IndiHOME sebagai tiga layanan dalam satu paket (3-in-1) karena selain internet, pelanggan juga mendapatkan tayangan TV berbayar dan saluran telepon"/>
     
      
      
      </div>

    )
  }


}

export default App;
