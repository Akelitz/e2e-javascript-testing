using E2EJavascriptTesting.Web.Models;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace E2EJavascriptTesting.Web.Controllers
{
    public class MoviesController : Controller
    {
        [HttpGet]
        public IActionResult Index(int? year)
        {
            var movies = Movie.Movies.AsQueryable();
            var years = Movie.Movies.Select(m => m.Year).Distinct();
            if (year.HasValue)
            {
                movies = movies.Where(m => m.Year == year.Value);
                years = years.Where(y => y != year.Value);
            }
            ViewBag.Title = "Movies" + (year.HasValue ? $" of {year.Value}" : "");
            ViewBag.Year = year.HasValue;
            ViewBag.Years = years.OrderBy(y => y);
            return View(
                movies.OrderBy(m => m.Title)
            );
        }

        [HttpGet]
        public IActionResult Details(int id)
        {
            var movie = Movie.Movies.FirstOrDefault(m => m.Id == id);
            if (movie == null)
                return NotFound();
            ViewBag.Title = movie.Title;
            return View(movie);
        }

        [HttpGet]
        public IActionResult Add()
        {
            ViewBag.Title = "New movie";
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]

        public IActionResult Add(int id, [Bind("Title,Year")]  Movie viewModel)
        {
            if (viewModel == null)
                return BadRequest();
            viewModel.Id = Movie.Movies.Max(m => m.Id) + 1;
            Movie.Movies.Add(viewModel);
            return RedirectToAction("Index");
        }

        [HttpGet]
        public IActionResult Edit(int id)
        {
            var movie = Movie.Movies.FirstOrDefault(m => m.Id == id);
            if (movie == null)
                return NotFound();
            ViewBag.Title = movie.Title;
            return View(movie);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]

        public IActionResult Edit(int id, [Bind("Title,Year")]  Movie viewModel)
        {
            if (viewModel == null)
                return BadRequest();
            var model = Movie.Movies.FirstOrDefault(m => m.Id == id);
            if (model == null)
                return NotFound();
            model.Title = viewModel.Title;
            model.Year = viewModel.Year;
            return RedirectToAction("Index");
        }

        [HttpGet]
        public IActionResult Delete(int id)
        {
            var movie = Movie.Movies.FirstOrDefault(m => m.Id == id);
            if (movie == null)
                return NotFound();
            ViewBag.Title = movie.Title;
            return View(movie);
        }

        [HttpPost]
        [ActionName("Delete")]
        public IActionResult DeleteConfirmed(int id)
        {
            var movie = Movie.Movies.FirstOrDefault(m => m.Id == id);
            if (movie == null)
                return BadRequest();
            Movie.Movies.Remove(movie);
            return RedirectToAction("Index");
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
