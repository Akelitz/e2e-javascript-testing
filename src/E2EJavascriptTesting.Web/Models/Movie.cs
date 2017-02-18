using System.Collections.Generic;

namespace E2EJavascriptTesting.Web.Models
{
    public class Movie
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public int Year { get; set; }

        public static IList<Movie> Movies;

        static Movie()
        {
            Movies = new List<Movie>
            {
                new Movie { Id = 1, Year = 2015, Title = "Minions" },
                new Movie { Id = 2, Year = 2014, Title = "Big Hero 6" },
                new Movie { Id = 3, Year = 2014, Title = "Rio 2 - Missione Amazzonia" },
                new Movie { Id = 4, Year = 2013, Title = "Frozen - Il Regno di Ghiaccio" },
                new Movie { Id = 5, Year = 2013, Title = "Monsters University" },
                new Movie { Id = 6, Year = 2013, Title = "Cattivissimo Me 2" },
                new Movie { Id = 7, Year = 2013, Title = "I Croodz" },
                new Movie { Id = 8, Year = 2013, Title = "Epic - Il mondo segreto" },
                new Movie { Id = 9, Year = 2013, Title = "Planes" },
                new Movie { Id = 10, Year = 2013, Title = "Si alza il vento" },
                new Movie { Id = 11, Year = 2012, Title = "Ribelle - The Brave" },
                new Movie { Id = 12, Year = 2012, Title = "Le 5 leggende" },
                new Movie { Id = 13, Year = 2012, Title = "L'era glaciale 4 - Continenti alla deriva" },
                new Movie { Id = 14, Year = 2012, Title = "Madagascar 3: Ricercati in Europa" },
                new Movie { Id = 15, Year = 2011, Title = "Cars 2" },
                new Movie { Id = 16, Year = 2011, Title = "Kung Fu Panda 2" },
                new Movie { Id = 17, Year = 2011, Title = "Il gatto con gli stivali" },
                new Movie { Id = 18, Year = 2011, Title = "Rio" },
                new Movie { Id = 19, Year = 2010, Title = "Cattivissimo Me" },
                new Movie { Id = 20, Year = 2010, Title = "Toy Story 3 - La grande fuga" },
                new Movie { Id = 21, Year = 2010, Title = "Rapunzel - L'Intreccio della Torre" },
                new Movie { Id = 22, Year = 2010, Title = "Shrek e vissero felici e contenti" },
                new Movie { Id = 23, Year = 2010, Title = "Le avventure di Sammy" },
                new Movie { Id = 24, Year = 2010, Title = "Arrietty" },
                new Movie { Id = 25, Year = 2009, Title = "L'era glaciale 3 - L'alba dei dinosauri" },
                new Movie { Id = 26, Year = 2009, Title = "La Principessa e il Ranocchio" },
                new Movie { Id = 27, Year = 2009, Title = "Piovono gnocchi" },
                new Movie { Id = 28, Year = 2008, Title = "Kung Fu Panda" },
                new Movie { Id = 29, Year = 2008, Title = "Madagascar 2" },
                new Movie { Id = 30, Year = 2008, Title = "Ponyo sulla scogliera" },
                new Movie { Id = 31, Year = 2007, Title = "Ratatouille" },
                new Movie { Id = 32, Year = 2007, Title = "Shrek terzo" },
                new Movie { Id = 33, Year = 2015, Title = "Il viaggio di Arlo" }
            };
        }
    }
}