using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace AspnetCoreFull.Pages.LayoutExamples
{
  public class BlankModel : PageModel
  {
    public void OnGet() { }
  }

  public class CollapsedMenuModel : PageModel
  {
    public void OnGet() { }
  }

  public class ContainerModel : PageModel
  {
    public void OnGet()
    {
    }
  }

  public class ContentNavbarModel : PageModel
  {
    public void OnGet() { }
  }

  public class ContentNavbarWithSidebarModel : PageModel
  {
    public void OnGet() { }
  }

  public class FluidModel : PageModel
  {
    public void OnGet() { }
  }

  public class HorizontalMenuModel : PageModel
  {
    public void OnGet()
    {
      ViewData["menuHorizontal"] = @ViewData["menuHorizontal"];
    }
  }

  public class VerticalMenuModel : PageModel
  {
    public void OnGet() { }
  }

  public class NavbarFullModel : PageModel
  {
    public void OnGet() { }
  }

  public class NavbarFullWithSidebarModel : PageModel
  {
    public void OnGet() { }
  }

  public class WithoutMenuModel : PageModel
  {
    public void OnGet() { }
  }

  public class WithoutNavbarModel : PageModel
  {
    public void OnGet() { }
  }
}
