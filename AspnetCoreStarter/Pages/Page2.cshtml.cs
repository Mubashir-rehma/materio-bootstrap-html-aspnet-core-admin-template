using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace AspnetCoreStarter.Pages;

public class Page2Model : PageModel
{
  private readonly ILogger<Page2Model> _logger;

  public Page2Model(ILogger<Page2Model> logger)
  {
    _logger = logger;
  }

  public void OnGet()
  {

  }
}
