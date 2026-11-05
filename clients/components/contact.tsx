import { useEffect, useRef, useState } from "react";

export default function Contact() {
  // Menyimpan semua nilai dari form
  const [forms, setForms] = useState({
    form1: "",
    form2: "",
    form3: "",
    form4: "",
  });

  // Menentukan area yang dianggap sebagai "dalam form"
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Mengecek ketika user melakukan klik
    const handleClickOutside = (event: MouseEvent) => {
      // Jika klik berada di luar container
      if (
        formContainerRef.current &&
        !formContainerRef.current.contains(event.target as Node)
      ) {
        // Kosongkan semua form
        setForms({
          form1: "",
          form2: "",
          form3: "",
          form4: "",
        });
      }
    };

    // Pasang event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Hapus event listener ketika component dihapus
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className=" text-black">
      <div className="bg-gray-300 w-20 h-60 xl:mt-70"></div>
      <div className="grid-cols-1 ">
        <div className="grid grid-cols-2 ">
          <h2 className="text-3xl xl:w-100 font-extrabold text-start xl:ml-30 xl:mt-[-30%]">
            Want to know more? Drop me a message
          </h2>

          <h2 className="text-3xl xl:w-100 font-extrabold text-start xl:ml-60 xl:mt-[-30%]">
            Send message
          </h2>
        </div>
        <div className="grid grid-cols-2">
          <p className="font-light text-m xl:ml-30 xl:mt-[-16%]">
            A set connected services that help turn strategy into real growth
          </p>
          <div className=" grid grid-cols-1">
            <p className="font-light text-m xl:ml-50 w-100 xl:mt-[-16%]">
              Fill out the form below with your details and a quick message. I'd
              love to hear from you
            </p>

            <div
              ref={formContainerRef}
              className="grid grid-cols-2 xl:mt-[-12%]"
            >
              <form className="w-60 h-15 border-2 xl:ml-30 border-zinc-600 rounded-xl xl:mt-10">
                <input
                  type="text"
                  value={forms.form1}
                  onChange={(e) =>
                    setForms({ ...forms, form1: e.target.value })
                  }
                  placeholder="First name"
                  className="w-full h-full px-5 outline-none "
                />
              </form>

              <form className="w-60 h-15 border-2 border-zinc-600 rounded-xl xl:mt-10">
                <input
                  type="text"
                  value={forms.form2}
                  onChange={(e) =>
                    setForms({ ...forms, form2: e.target.value })
                  }
                  placeholder="Last name"
                  className="w-full h-full px-5 outline-none "
                />
              </form>

              <div className="grid-cols-1  xl:ml-30 xl:mt-[-8%] group transition-all duration-200">
                <form className="w-125 h-15 border-2 border-zinc-600 rounded-xl xl:mt-10">
                  <input
                    type="email"
                    value={forms.form3}
                    onChange={(e) =>
                      setForms({ ...forms, form3: e.target.value })
                    }
                    placeholder="Email"
                    className="w-full h-full px-5 outline-none "
                    required
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                    onInvalid={(e) =>
                      e.currentTarget.setCustomValidity(
                        "Masukkan email yang valid, contoh: nama@gmail.com",
                      )
                    }
                    onInput={(e) => e.currentTarget.setCustomValidity("")}
                  />
                </form>

                <form className="w-125 h-40 border-2  border-zinc-600 rounded-xl xl:mt-3">
                  <input
                    type="text"
                    value={forms.form4}
                    onChange={(e) =>
                      setForms({ ...forms, form4: e.target.value })
                    }
                    placeholder="Write message here"
                    className="w-full h-full px-5 outline-none "
                  />

                  <button
                    type="submit"
                    className="mt-5 px-6 py-3 border-2 rounded-xl bg-white text-black hover:bg-black hover:text-white duration-400"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[-20%]">
          {/*  */}
          <div className="group transition-all duration-800 xl:w-50 hover:scale-105   xl:ml-30 grid grid-cols-2 ">
            <img
              src="https://img.icons8.com/ios/50/phone--v1.png"
              width="38"
              height="38"
              className="group-hover:hidden xl:mt-2 "
            ></img>
            <img
              src="https://img.icons8.com/ios-filled/50/phone.png"
              width="38"
              height="38"
              className="hidden group-hover:block xl:mt-2 "
            ></img>
            <div className="grid-cols-1 ">
              <p className="font-bold text-m xl:w-50">Phone Number</p>
              <p>+6282256405157</p>
            </div>
          </div>
          {/*  */}

          <div className="group transition-all duration-800 hover:scale-105 grid grid-cols-2 xl:w-50 xl:ml-30 xl:mt-10 ">
            <img
              src="https://img.icons8.com/ios/50/secured-letter--v1.png"
              width="38"
              height="38"
              className="group-hover:hidden xl:mt-2"
            ></img>
            <img
              src="https://img.icons8.com/ios-filled/50/secured-letter--v1.png"
              width="38"
              height="38"
              className="hidden group-hover:block xl:mt-2"
            ></img>
            <div className="grid-cols-1">
              <p className="  font-bold text-m">Email</p>
              <p>Rivaldo.jollien@gmail.com</p>
            </div>
          </div>
          {/*  */}
          <div className="group transition-all duration-800 xl:w-50 hover:scale-105   xl:ml-30 grid grid-cols-2 xl:mt-10 ">
            <img
              src="https://img.icons8.com/ios/50/marker--v1.png"
              width="38"
              height="38"
              className="group-hover:hidden xl:mt-2"
            ></img>
            <img
              src="https://img.icons8.com/ios-filled/50/marker.png"
              width="38"
              height="38"
              className="hidden group-hover:block xl:mt-2"
            ></img>
            <div className="grid-cols-1">
              <p className="font-bold text-m ">Address</p>
              <p className="w-100">
                Jalan Poros Transkaltim RT 03 Muara Nayan, Kutai Barat
              </p>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
}
