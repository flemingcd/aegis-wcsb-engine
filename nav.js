/**
 * 5th Meridian Global Header & Navigation Template
 * Single source of truth for all HTML pages.
 */

class FiveMeridianNav extends HTMLElement {
  connectedCallback() {
    const activePage = this.getAttribute('active-page') || '';
    
    this.innerHTML = `
      <header class="sticky top-0 z-50 bg-obsidian/95 backdrop-blur-md border-b border-panelBorder font-mono">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between text-xs tracking-wider">
          
          <!-- BRAND LOGO -->
          <a href="index.html" class="flex items-center space-x-3 group">
            <div class="w-6 h-6 border border-amber-500/40 bg-zinc-900 flex items-center justify-center p-1">
              <div class="w-0.5 h-full bg-meridianGold group-hover:bg-amber-300 transition-colors"></div>
            </div>
            <span class="font-bold text-silverLight uppercase tracking-widest text-sm group-hover:text-meridianGold transition">5TH MERIDIAN</span>
          </a>
          
          <!-- DESKTOP NAVIGATION LINKS -->
          <nav class="hidden lg:flex items-center space-x-6 text-silverDark">
            <a href="index.html#alignment" class="hover:text-silverLight transition ${activePage === 'alignment' ? 'text-silverLight font-bold' : ''}">01// ALIGNMENT</a>
            <a href="index.html#capabilities" class="hover:text-silverLight transition ${activePage === 'capabilities' ? 'text-silverLight font-bold' : ''}">02// CAPABILITIES</a>
            <a href="5mGrid.html" class="hover:text-amber-300 transition ${activePage === '5mgrid' ? 'text-meridianGold font-bold' : 'text-meridianGold/80'}">02.5// 5M GRID</a>
            
            <!-- INSIGHTS & CASE STUDIES DROPDOWN MENU -->
            <div class="relative group py-2">
              <button class="flex items-center gap-1.5 text-silverLight font-bold hover:text-meridianGold transition uppercase tracking-wider">
                <span>03// INSIGHTS</span>
                <svg class="w-3 h-3 text-meridianGold transform group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              <!-- DROPDOWN PANEL -->
              <div class="absolute left-0 mt-2 w-72 bg-charcoal border border-amber-500/30 rounded-md shadow-2xl opacity-0 translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50 p-2 space-y-1">
                <div class="text-[10px] text-silverDark font-bold px-2 py-1 border-b border-panelBorder uppercase tracking-widest">PUBLISHED CASE STUDIES</div>
                
                <a href="the_unburned_powder_keg.html" class="block p-2 rounded transition ${activePage === 'powder_keg' ? 'bg-amber-500/10 border border-amber-500/30 text-amberLight' : 'hover:bg-zinc-800 text-silver hover:text-silverLight'}">
                  <div class="font-bold text-xs flex items-center justify-between">
                    <span>The Unburned Powder Keg</span>
                    <span class="text-[9px] text-meridianGold font-mono">${activePage === 'powder_keg' ? 'ACTIVE' : 'NEW'}</span>
                  </div>
                  <p class="text-[10px] text-silverDark font-sans mt-0.5">Predictive wildfire analytics &amp; asset exposure</p>
                </a>

                <a href="5m_grid_disruption_blog_post.html" class="block p-2 rounded transition ${activePage === 'grid_disruption' ? 'bg-amber-500/10 border border-amber-500/30 text-amberLight' : 'hover:bg-zinc-800 text-silver hover:text-silverLight'}">
                  <div class="font-bold text-xs flex items-center justify-between">
                    <span>5M Grid Disruption</span>
                    <span class="text-[9px] text-meridianGold font-mono">${activePage === 'grid_disruption' ? 'ACTIVE' : ''}</span>
                  </div>
                  <p class="text-[10px] text-silverDark font-sans mt-0.5">WCSB GIS operations &amp; liability modeling</p>
                </a>

                
              </div>
            </div>

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="text-silverDark hover:text-silverLight transition px-1">[ LINKEDIN ↗ ]</a>
          </nav>

          <!-- START INQUIRY BUTTON -->
          <div class="flex items-center space-x-3">
            <a href="#inquiry" class="border border-zinc-700 bg-obsidian px-3 py-1.5 rounded-none text-silverLight hover:border-meridianGold hover:text-meridianGold transition shadow-sm font-semibold tracking-wider">
              [ START INQUIRY ]
            </a>

            <!-- MOBILE MENU TOGGLE BUTTON -->
            <button id="5mMobileBtn" class="lg:hidden p-1.5 border border-panelBorder text-silver hover:text-meridianGold transition">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- MOBILE DROPDOWN MENU -->
        <div id="5mMobileMenu" class="hidden lg:hidden border-b border-panelBorder bg-charcoal px-4 py-4 space-y-3 font-mono text-xs">
          <a href="index.html#alignment" class="block text-silver hover:text-meridianGold">01// ALIGNMENT</a>
          <a href="index.html#capabilities" class="block text-silver hover:text-meridianGold">02// CAPABILITIES</a>
          <a href="5mGrid.html" class="block text-meridianGold font-bold">02.5// 5M GRID</a>
          
          <div class="pt-2 border-t border-panelBorder space-y-2">
            <div class="text-[10px] text-amberLight font-bold uppercase tracking-widest">03// INSIGHTS &amp; CASE STUDIES</div>
            <a href="the_unburned_powder_keg.html" class="block pl-3 ${activePage === 'powder_keg' ? 'text-meridianGold font-bold' : 'text-silverDark hover:text-silver'}">• The Unburned Powder Keg</a>
            <a href="5m_grid_disruption_blog_post.html" class="block pl-3 ${activePage === 'grid_disruption' ? 'text-meridianGold font-bold' : 'text-silverDark hover:text-silver'}">• 5M Grid Disruption</a>
            <a href="#northbound" class="block pl-3 text-silverDark hover:text-silver">• Northbound &amp; Found</a>
          </div>

          <div class="pt-2 border-t border-panelBorder flex justify-between items-center text-silverDark">
            <a href="https://linkedin.com" target="_blank" class="hover:text-silverLight">[ LINKEDIN ↗ ]</a>
          </div>
        </div>
      </header>
    `;

    const mobileBtn = this.querySelector('#5mMobileBtn');
    const mobileMenu = this.querySelector('#5mMobileMenu');

    if (mobileBtn && mobileMenu) {
      mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }
  }
}

customElements.define('five-meridian-nav', FiveMeridianNav);