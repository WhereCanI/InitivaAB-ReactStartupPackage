using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Mvc.Html;

namespace PROJECTNAME
{
    public static class HtmlHelperExtensions
    {
        public static PROJECTNAMEHelper PROJECTNAME(this HtmlHelper htmlHelper)
        {
            return new PROJECTNAMEHelper(htmlHelper);
        }
    }

    public class PROJECTNAMEHelper
    {
        private HtmlHelper HtmlHelper { get; }

        internal PROJECTNAMEHelper(HtmlHelper htmlHelper)
        {
            HtmlHelper = htmlHelper;
        }

        public IHtmlString ReactComponent(string componentName, object props = null)
        {
            return HtmlHelper.Partial("/PROJECTNAME/PATH_TO/ReactComponent.cshtml",
                new PROJECTNAME.PATH_TO.ReactComponentModel
                {
                    ComponentName = componentName,
                    Props = props
                });
        }
    }
}