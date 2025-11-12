/***********************
 * Datos de productos
 ***********************/
const productosData = [
  { id: "Granizado", nombre: "Granizado de cafe", img: "images/Granizado de cafe.jpg", desc: "Con trozos naturales de fresa. Dulce y refrescante.", categorias: ["favorito"] },
  { id: "Kumis", nombre: "Kumis", img: "images/productos/kumis1.png", desc: "Auténtico y cremoso, el favorito de siempre.", categorias: ["mas-vendido"] },
  { id: "Affogato", nombre: "Affogato", img: "images/productos/Affogato.webp", desc: "", categorias: ["mas-vendido"] },
  { id: "Agua", nombre: "Agua en botella", img: "images/productos/Aguaenbotella.webp", desc: "", categorias: ["mas-vendido"] },
  { id: "Almojabana", nombre: "Almojabana", img: "images/productos/Almojabana.webp", desc: "Bajo en grasa, pero igual de delicioso.", categorias: ["mas-vendido"] },
  { id: "Aromatica", nombre: "Aromatica", img: "images/productos/Aromatica.webp", desc: "Una explosión de sabor.", categorias: ["mas-vendido"] },
  { id: "Avena", nombre: "Avena", img: "images/productos/Avena.webp", desc: "Perfecto para quienes cuidan su dieta.", categorias: [] },
  { id: "Capuccino", nombre: "Capuccino", img: "images/productos/Capuccino.webp", desc: "Refrescante y tropical.", categorias: ["favorito"] },
  { id: "Chococono", nombre: "Chococono", img: "images/productos/Choco_Cono.webp", desc: "", categorias: [] },
  { id: "Chocokumis", nombre: "Chocokumis", img: "images/productos/ChocoKumis.webp", desc: "Ácido y dulce, para paladares intensos.", categorias: ["mas-vendido"] },
  { id: "Citrica", nombre: "Cítrica", img: "images/productos/Citrica.webp", desc: "", categorias: ["mas-vendido"] },
  { id: "Empanadadecarne", nombre: "Empanada de carne", img: "images/productos/Empanadadecarne.webp", desc: "", categorias: ["mas-vendido"] },
  { id: "Empanadadepollo", nombre: "Empanada de pollo", img: "images/productos/Empanadadepollo.webp", desc: "El sabor colombiano por excelencia.", categorias: ["mas-vendido"] },
  { id: "Empanadallanera", nombre: "Empanada llanera", img: "images/productos/Empanadallanera.webp", desc: "", categorias: [""] },
  { id: "Galletadeavena", nombre: "Galleta de avena", img: "images/productos/Galletadeavena.webp", desc: "Tradicional y lleno de energía natural.", categorias: [] },
  { id: "KumisCono", nombre: "Kumis Cono", img: "images/productos/KumisCono.webp", desc: "", categorias: ["favorito"] },
  { id: "Mantecada", nombre: "Mantecada", img: "images/productos/Mantecada.webp", desc: "", categorias: [] },
  { id: "Pandebono", nombre: "Pandebono", img: "images/productos/Pandebono.webp", desc: "", categorias: [] },
  { id: "TintoAmericano", nombre: "Tinto Americano", img: "images/productos/TintoAmericano.webp", desc: "Tradicional y lleno de energía natural.", categorias: ["favorito"] },
  { id: "Tortadechocolate", nombre: "Torta de chocolate", img: "images/productos/Tortadechocolate.webp", desc: "", categorias: [] },
  { id: "Tortadecuajada", nombre: "Torta de cuajada", img: "images/productos/Tortadecuajada.webp", desc: "", categorias: [] },
  { id: "Tortadepan", nombre: "Torta de pan", img: "images/productos/Tortadepan.webp", desc: "", categorias: [] },
  { id: "Yogurt", nombre: "Yogurt", img: "images/productos/Yogurt.webp", desc: "", categorias: ["favorito"] }
];

/***********************
 * Interacciones UI
 ***********************/
document.addEventListener('DOMContentLoaded', () => {
  // --- Logo hover ---
  const logo = document.querySelector('.logo');
  logo?.addEventListener('mouseover', () => (logo.style.textShadow = '0 0 10px rgba(255,255,255,0.8)'));
  logo?.addEventListener('mouseout',  () => (logo.style.textShadow = 'none'));

  // --- Menú hamburguesa ---
  const menu = document.querySelector('.menu');
  const toggle = document.querySelector('.menu-toggle');
  if (menu && toggle) {
    toggle.addEventListener('click', () => menu.classList.toggle('active'));
  }

  // --- Formulario de contacto genérico (si existe) ---
  const form = document.getElementById('formulario-contacto');
  form?.addEventListener('submit', e => {
    e.preventDefault();
    alert('Gracias por contactarnos. Pronto te responderemos.');
    form.reset();
  });

  // --- Hero slider (si existe) ---
  const slidesContainer = document.querySelector('.slides');
  const slideImages = document.querySelectorAll('.slides img');
  const dots = document.querySelectorAll('.dot');
  if (slidesContainer && slideImages.length && dots.length) {
    let currentIndex = 0;
    function showSlide(index) {
      slidesContainer.style.transform = `translateX(-${index * 100}vw)`;
      dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
    }
    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        currentIndex = parseInt(dot.dataset.index, 10) || 0;
        showSlide(currentIndex);
      });
    });
    setInterval(() => {
      currentIndex = (currentIndex + 1) % slideImages.length;
      showSlide(currentIndex);
    }, 4000);
  }

  // --- Carrusel "Más vendidos" en home (si existe) ---
  const productosLoop = document.getElementById('mas-vendidos-carousel');
  if (productosLoop) {
    const masVendidos = productosData.filter(p => p.categorias.includes('mas-vendido'));
    productosLoop.innerHTML = masVendidos.map(p => `
      <div class="product-slide">
        <a href="producto.html?id=${encodeURIComponent(p.id)}">
          <div class="product-slide-title">${p.nombre}</div>
          <img src="${p.img}" alt="${p.nombre}" />
        </a>
      </div>
    `).join('');
  }

  // --- Botones de carrusel loop (si existen) ---
  const carouselTrack = document.querySelector('.product-carousel-track');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  if (carouselTrack && prevBtn && nextBtn) {
    nextBtn.addEventListener('click', () => {
      const first = carouselTrack.firstElementChild;
      if (first) carouselTrack.appendChild(first);
      carouselTrack.scrollLeft = 0;
    });

    prevBtn.addEventListener('click', () => {
      const last = carouselTrack.lastElementChild;
      if (last) carouselTrack.insertBefore(last, carouselTrack.firstElementChild);
      carouselTrack.scrollLeft = 0;
    });

    setInterval(() => {
      const first = carouselTrack.firstElementChild;
      if (first) carouselTrack.appendChild(first);
      carouselTrack.scrollLeft = 0;
    }, 5000);
  }

  // --- Listado, filtros y paginación (solo en productos.html) ---
  const container = document.getElementById('productos-container');
  const paginacion = document.getElementById('paginacion');
  const filtroBtns = document.querySelectorAll('.filtro-btn');
  const ordenarSelect = document.getElementById('ordenar');
  const filtrosWrapper = document.querySelector('.filtros');

  if (container && paginacion) {
    // Buscador
    let searchInput = null;
    if (filtrosWrapper) {
      searchInput = document.createElement('input');
      searchInput.type = 'text';
      searchInput.placeholder = 'Buscar producto...';
      searchInput.className = 'buscador';
      filtrosWrapper.appendChild(searchInput);
    }

    // Botón volver arriba
    const volverArriba = document.createElement('button');
    volverArriba.textContent = '↑ Volver arriba';
    volverArriba.className = 'volver-arriba';
    document.body.appendChild(volverArriba);
    volverArriba.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    let productosFiltrados = [...productosData];
    let currentPage = 1;
    const itemsPerPage = 6;

    function renderPaginacion() {
      const totalPages = Math.ceil(productosFiltrados.length / itemsPerPage);
      paginacion.innerHTML = '';
      for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.textContent = i;
        btn.className = i === currentPage ? 'activo' : '';
        btn.addEventListener('click', () => {
          currentPage = i;
          renderProductos();
          document.querySelector('.productos-section')?.scrollIntoView({ behavior: 'smooth' });
        });
        paginacion.appendChild(btn);
      }
    }

    function renderProductos() {
      container.innerHTML = '';
      const start = (currentPage - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      const paginaProductos = productosFiltrados.slice(start, end);

      paginaProductos.forEach(prod => {
        const box = document.createElement('div');
        box.className = `producto-box ${prod.categorias.join(' ')}`;

        if (prod.categorias.includes('favorito')) {
          box.innerHTML += `<span class="etiqueta favorito">★ Favorito</span>`;
        }
        if (prod.categorias.includes('mas-vendido')) {
          box.innerHTML += `<span class="etiqueta mas-vendido">🔥 Más vendido</span>`;
        }

        box.innerHTML += `
          <a href="producto.html?id=${encodeURIComponent(prod.id)}">
            <img src="${prod.img}" alt="${prod.nombre}" />
            <div class="info-producto">
              <h3>${prod.nombre}</h3>
              <p>${prod.desc}</p>
            </div>
          </a>
        `;
        container.appendChild(box);
      });

      renderPaginacion();
    }

    // Filtros
    if (filtroBtns.length) {
      filtroBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          filtroBtns.forEach(b => b.classList.remove('activo'));
          btn.classList.add('activo');
          const filtro = btn.dataset.filtro;
          productosFiltrados = (filtro === 'todos')
            ? [...productosData]
            : productosData.filter(p => p.categorias.includes(filtro));
          if (searchInput) searchInput.value = '';
          currentPage = 1;
          renderProductos();
        });
      });
    }

    // Orden
    ordenarSelect?.addEventListener('change', () => {
      const val = ordenarSelect.value;
      if (val === 'nombre-asc') productosFiltrados.sort((a, b) => a.nombre.localeCompare(b.nombre));
      if (val === 'nombre-desc') productosFiltrados.sort((a, b) => b.nombre.localeCompare(a.nombre));
      renderProductos();
    });

    // Buscador
    searchInput?.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase();
      productosFiltrados = productosData.filter(p =>
        p.nombre.toLowerCase().includes(query) || p.desc.toLowerCase().includes(query)
      );
      filtroBtns.forEach(b => b.classList.remove('activo'));
      if (ordenarSelect) ordenarSelect.value = '';
      currentPage = 1;
      renderProductos();
    });

    // Inicial
    renderProductos();
  }
});
