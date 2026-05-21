const PAGINA_PRINCIPAL = "index.html";
        const CLAVE_USUARIOS = "usuariosPlayGames";

        const usuariosIniciales = [
            {
                usuario: "admin",
                password: "1234"
            }
        ];

        let usuariosMemoria = usuariosIniciales.slice();

        const contenedorLogin = document.getElementById("contenedorLogin");
        const abrirRegistro = document.getElementById("abrirRegistro");
        const abrirLogin = document.getElementById("abrirLogin");
        const formLogin = document.getElementById("formLogin");
        const formRegistro = document.getElementById("formRegistro");
        const mensajeLogin = document.getElementById("mensajeLogin");
        const mensajeRegistro = document.getElementById("mensajeRegistro");

        asegurarUsuariosIniciales();

        abrirRegistro.addEventListener("click", function () {
            contenedorLogin.classList.add("registro-activo");
            limpiarMensajes();
        });

        abrirLogin.addEventListener("click", function () {
            contenedorLogin.classList.remove("registro-activo");
            limpiarMensajes();
        });

        formRegistro.addEventListener("submit", function (evento) {
            evento.preventDefault();

            const registroUser = document.getElementById("registroUser");
            const registroPass = document.getElementById("registroPass");
            const registroPass2 = document.getElementById("registroPass2");

            const usuario = registroUser.value.trim();
            const password = registroPass.value.trim();
            const password2 = registroPass2.value.trim();
            const usuarios = obtenerUsuarios();

            if (usuario === "" || password === "" || password2 === "") {
                mostrarMensaje(mensajeRegistro, "Rellena todos los campos", false);
                return;
            }

            if (password.length < 4) {
                mostrarMensaje(mensajeRegistro, "La contraseña debe tener minimo 4 caracteres", false);
                return;
            }

            if (password !== password2) {
                mostrarMensaje(mensajeRegistro, "Las contraseñas no coinciden", false);
                return;
            }

            const usuarioExiste = usuarios.some(function (cuenta) {
                return cuenta.usuario.toLowerCase() === usuario.toLowerCase();
            });

            if (usuarioExiste) {
                mostrarMensaje(mensajeRegistro, "Ese usuario ya existe", false);
                return;
            }

            usuarios.push({
                usuario: usuario,
                password: password
            });

            guardarUsuarios(usuarios);
            mostrarMensaje(mensajeRegistro, "Cuenta creada correctamente", true);

            setTimeout(function () {
                document.getElementById("loginUser").value = usuario;
                document.getElementById("loginPass").value = "";

                registroUser.value = "";
                registroPass.value = "";
                registroPass2.value = "";

                contenedorLogin.classList.remove("registro-activo");
                limpiarMensajes();
                document.getElementById("loginPass").focus();
            }, 900);
        });

        formLogin.addEventListener("submit", function (evento) {
            evento.preventDefault();

            const loginUser = document.getElementById("loginUser");
            const loginPass = document.getElementById("loginPass");

            const usuario = loginUser.value.trim();
            const password = loginPass.value.trim();
            const usuarios = obtenerUsuarios();

            if (usuario === "" || password === "") {
                mostrarMensaje(mensajeLogin, "Rellena todos los campos", false);
                return;
            }

            const usuarioCorrecto = usuarios.find(function (cuenta) {
                return cuenta.usuario === usuario && cuenta.password === password;
            });

            if (!usuarioCorrecto) {
                mostrarMensaje(mensajeLogin, "Usuario o contraseña incorrectos", false);
                return;
            }

            try {
                sessionStorage.setItem("usuarioActivo", "true");
                sessionStorage.setItem("usuarioNombre", usuario);
            } catch (error) {
                console.log("No se pudo guardar la sesion");
            }

            mostrarMensaje(mensajeLogin, "Inicio de sesion correcto", true);

            setTimeout(function () {
                window.location.href = PAGINA_PRINCIPAL;
            }, 700);
        });

        function asegurarUsuariosIniciales() {
            const usuarios = obtenerUsuarios();
            const existeAdmin = usuarios.some(function (cuenta) {
                return cuenta.usuario === "admin";
            });

            if (!existeAdmin) {
                usuarios.unshift(usuariosIniciales[0]);
                guardarUsuarios(usuarios);
            }
        }

        function obtenerUsuarios() {
            let usuarios = usuariosMemoria;

            try {
                usuarios = JSON.parse(localStorage.getItem(CLAVE_USUARIOS));
            } catch (error) {
                usuarios = usuariosMemoria;
            }

            if (!Array.isArray(usuarios)) {
                usuarios = usuariosMemoria;
            }

            usuarios = usuarios.filter(function (cuenta) {
                return cuenta && typeof cuenta.usuario === "string" && typeof cuenta.password === "string";
            });

            usuariosMemoria = usuarios;
            return usuarios;
        }

        function guardarUsuarios(usuarios) {
            usuariosMemoria = usuarios;

            try {
                localStorage.setItem(CLAVE_USUARIOS, JSON.stringify(usuarios));
            } catch (error) {
                console.log("No se pudieron guardar los usuarios");
            }
        }

        function mostrarMensaje(elemento, texto, correcto) {
            elemento.textContent = texto;
            elemento.classList.remove("correcto", "error");

            if (correcto) {
                elemento.classList.add("correcto");
            } else {
                elemento.classList.add("error");
            }
        }

        function limpiarMensajes() {
            mensajeLogin.textContent = "";
            mensajeRegistro.textContent = "";
            mensajeLogin.classList.remove("correcto", "error");
            mensajeRegistro.classList.remove("correcto", "error");
        }