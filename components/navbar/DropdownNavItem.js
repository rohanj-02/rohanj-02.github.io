<script>
  export let dropdownItem;
  let dropdownVisible = false;
  let thisElement;
  function handleClick(e) {
    dropdownVisible = !dropdownVisible;
  }
  function hideDropdown(event) {
    if (thisElement && !thisElement.contains(event.target)) {
      dropdownVisible = false;
    }
  }
</script>

<!-- <svelte:window on:mousemove={hideDropdown} /> -->
<div
  bind:this={thisElement}
  on:mouseenter={() => {
    dropdownVisible = true;
  }}
  on:mouseleave={() => {
    dropdownVisible = false;
  }}
  class="group hover:cursor-pointer"
>
  <div class="ml-3 relative my-auto">
    <div>
      <button
        type="button"
        class="group rounded-md inline-flex items-center text-base font-medium bg-secondary-800 p-2 text-white group-hover:text-black group-hover:bg-white focus:outline-none focus:ring-2 focus:ring-white"
        aria-expanded="false"
      >
        <!--Heroicon name: solid/chevron-down-->
        <span>{dropdownItem.menuTitle}</span>
        <svg
          class="text-white ml-2 h-5 w-5 group-hover:text-black"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>

    <!--
        Dropdown menu, show/hide based on menu state.
  
        Entering: "transition ease-out duration-100"
          From: "transform opacity-0 scale-95"
          To: "transform opacity-100 scale-100"
        Leaving: "transition ease-in duration-75"
          From: "transform opacity-100 scale-100"
          To: "transform opacity-0 scale-95"
      -->
    {#if dropdownVisible}
      <div
        class="origin-top-right absolute right-0 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="user-menu"
      >
        {#each dropdownItem.dropdownTitles as { name, link }}
          <a
            href={link}
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem">{name}</a
          >
        {/each}
      </div>
    {/if}
  </div>
</div>
