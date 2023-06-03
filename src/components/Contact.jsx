import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
	const formRef = useRef();
	const [form, setForm] = useState({
		nombre: "",
		email: "",
		mensaje: "",
	});
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();

		const service = "service_pvuk9gl";
		const template = "template_2usneng";
		const key = "NeOO99lpyn65FvPP2";
		setLoading(true);
		emailjs
			.send(
				service,
				template,
				{
					from_name: form.nombre,
					to_name: "Santos",
					from_email: form.email,
					to_email: "santosalarcon86@gmail.com",
					message: form.mensaje,
				},
				key
			)
			.then(
				() => {
					setLoading(false);
					alert(
						"Gracias. Me pondré en contacto contigo lo más rápido posible."
					);
					setForm({
						nombre: "",
						email: "",
						mensaje: "",
					});
				},
				(error) => {
					setLoading(false);
					console.log(error);
					alert("Ha ocurrido un error.");
				}
			);
	};

	return (
		<div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
			>
				<p className={styles.sectionSubText}>Pónte en contacto conmigo</p>
				<h3 className={styles.sectionHeadText}>Contacto</h3>

				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className="mt-12 flex flex-col gap-8"
				>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Nombre <span className="text-red-500 font-medium mb-4" title="Campo obligatorio">(*)</span></span>
						<input
							className="font-medium bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none"
							type="text"
							placeholder="Nombre"
							required
							name="nombre"
							value={form.nombre}
							onChange={handleChange}
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">
							Correo electrónico <span className="text-red-500 font-medium mb-4" title="Campo obligatorio">(*)</span>
						</span>
						<input
							className="font-medium bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none"
							type="email"
							placeholder="Correo electrónico"
							required
							name="email"
							value={form.email}
							onChange={handleChange}
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Mensaje <span className="text-red-500 font-medium mb-4" title="Campo obligatorio">(*)</span></span>
						<textarea
							className="font-medium bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none"
							type="text"
							placeholder="Mensaje"
							required
							rows={7}
							name="mensaje"
							value={form.mensaje}
							onChange={handleChange}
						/>
					</label>
					<button
						type="submit"
						className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
					>
						{loading ? "Enviando..." : "Enviar"}
					</button>
				</form>
			</motion.div>

			<motion.div
				className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
				variants={slideIn("right", "tween", 0.2, 1)}
			>
				<EarthCanvas />
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, "contact");
